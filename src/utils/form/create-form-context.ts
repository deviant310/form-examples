import {
  createContext,
  createElement,
  FC,
  PropsWithChildren,
  useContext,
} from "react";

import {
  FieldValues,
  useForm as useReactHookForm,
  useController as useReactHookFormController,
  useFormState as useReactHookFormState,
  UseFormReturn,
  UseFormProps,
  UseControllerProps,
  FieldPath,
  UseFormStateProps,
} from "react-hook-form";

export function createFormContext<
  Values extends FieldValues = FieldValues,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Context = any,
  TransformedValues = Values,
>() {
  const formContext = createContext<UseFormReturn<
    Values,
    Context,
    TransformedValues
  > | null>(null);

  const { Provider } = formContext;

  const FormProvider: FC<
    PropsWithChildren &
      UseFormProps<Values, Context, TransformedValues> & {
        defaultValues:
          | (Values extends (payload?: unknown) => Promise<Values>
              ? Awaited<Values>
              : Values)
          | ((payload?: unknown) => Promise<Values>);
      }
  > = ({ children, ...props }) => {
    const methods = useReactHookForm<Values, Context, TransformedValues>(props);

    return createElement(Provider, { value: methods }, children);
  };

  const useDefinedContext = () => {
    const context = useContext(formContext);

    if (!context)
      throw new Error("Form hooks must be used within a FormProvider");

    return context;
  };

  const useForm = () => useDefinedContext();

  const useFormState = (
    props?: Omit<UseFormStateProps<Values, TransformedValues>, "control">,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormState({ control, ...props });
  };

  const useController = <Name extends FieldPath<Values>>(
    props: Omit<UseControllerProps<Values, Name, TransformedValues>, "control">,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormController({ control, ...props });
  };

  return { FormProvider, useForm, useFormState, useController };
}
