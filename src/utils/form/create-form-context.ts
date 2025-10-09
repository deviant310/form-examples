import type { FC, PropsWithChildren } from "react";
import { createContext, createElement, useContext } from "react";

import {
  createFormControl,
  useController as useReactHookFormController,
  useFormState as useReactHookFormState,
  useFieldArray as useReactHookFormFieldArray,
  Controller as ReactHookFormController,
  FieldValues,
  UseFormProps,
  FieldPath,
  ControllerProps,
  FieldArrayPath,
  UseFieldArrayProps,
  UseControllerProps,
  UseFormStateProps,
} from "react-hook-form";

type AsyncDefaultValues<Values> = (payload?: unknown) => Promise<Values>;

type FormContextProps<
  Values extends FieldValues = FieldValues,
  Context = unknown,
  TransformedValues = Values,
> = UseFormProps<Values, Context, TransformedValues> & {
  defaultValues:
    | (Values extends AsyncDefaultValues<Values> ? Awaited<Values> : Values)
    | AsyncDefaultValues<Values>;
};

export function createFormContext<
  Values extends FieldValues = FieldValues,
  Context = unknown,
  TransformedValues = Values,
>(props: FormContextProps<Values, Context, TransformedValues>) {
  const formControl = createFormControl<Values, Context, TransformedValues>(
    props,
  );

  const formContext = createContext(formControl);

  const { Provider } = formContext;

  const FormProvider: FC<PropsWithChildren> = ({ children }) =>
    createElement(Provider, { value: formControl }, children);

  const useDefinedContext = () => {
    const context = useContext(formContext);

    if (!context)
      throw new Error("Form hooks must be used within a FormProvider");

    return context;
  };

  const Controller = <Name extends FieldPath<Values> = FieldPath<Values>>(
    props: ControllerProps<Values, Name, TransformedValues>,
  ) => {
    const { control } = useDefinedContext();

    return createElement(
      ReactHookFormController<Values, Name, TransformedValues>,
      { ...props, control },
    );
  };

  const useForm = () => useDefinedContext();

  const useFormState = (
    props?: Omit<UseFormStateProps<Values, TransformedValues>, "control">,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormState({ ...props, control });
  };

  const useController = <Name extends FieldPath<Values>>(
    props: Omit<UseControllerProps<Values, Name, TransformedValues>, "control">,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormController({ ...props, control });
  };

  const useFieldArray = <
    ArrayName extends FieldArrayPath<Values>,
    KeyName extends string = "id",
  >(
    props: UseFieldArrayProps<Values, ArrayName, KeyName, TransformedValues>,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormFieldArray({ ...props, control });
  };

  return {
    FormProvider,
    Controller,
    useForm,
    useFormState,
    useController,
    useFieldArray,
  };
}
