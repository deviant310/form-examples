import { createStoresContext } from "../utils/store";

type FormStage = "primary" | "secondary" | "another";

const { StoresProvider: FormStageProvider, useStore } = createStoresContext();

export const useFormStage = () => {
  const { value: formStage, setValue: setFormStage } = useStore<FormStage>(
    "form-stage",
    "primary",
  );

  return { formStage, setFormStage };
};

export { FormStageProvider };
