import { FC, PropsWithChildren } from "react";

import { createFormControl } from "react-hook-form";

import {
  SecondaryFormProvider,
  SecondaryForm,
  SecondaryFormValues,
} from "./secondary-form";

const { formControl } = createFormControl<SecondaryFormValues>();

export const AnotherFormProvider: FC<PropsWithChildren> = ({ children }) => (
  <SecondaryFormProvider formControl={formControl}>
    {children}
  </SecondaryFormProvider>
);

export const AnotherForm = () => <SecondaryForm title="Another form" />;
