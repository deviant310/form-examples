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

export function createFormContext<Values extends FieldValues = FieldValues>() {
  const formContext = createContext<UseFormReturn<Values> | null>(null);

  const { Provider } = formContext;

  const FormProvider: FC<PropsWithChildren & UseFormProps<Values>> = ({
    children,
    ...props
  }) => {
    const methods = useReactHookForm<Values>(props);

    return createElement(Provider, { value: methods }, children);
  };

  const useDefinedContext = () => {
    const context = useContext(formContext);

    if (!context)
      throw new Error("Form hooks must be used within a FormProvider");

    return context;
  };

  const useForm = () => useDefinedContext();

  const useFormState = (props?: Omit<UseFormStateProps<Values>, "control">) => {
    const { control } = useDefinedContext();

    return useReactHookFormState({ control, ...props });
  };

  const useController = <Name extends FieldPath<Values>>(
    props: Omit<UseControllerProps<Values, Name>, "control">,
  ) => {
    const { control } = useDefinedContext();

    return useReactHookFormController({ control, ...props });
  };

  return { FormProvider, useForm, useFormState, useController };
}
