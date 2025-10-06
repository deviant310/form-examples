import { createStoresContext } from "../utils/store";

type Stage = "primary" | "secondary" | "another";

const { StoresProvider: FormStageProvider, useStore } = createStoresContext();

export const useFormStage = () => {
  const { value: formStage, setValue: setFormStage } = useStore<Stage>(
    "form-stage",
    "primary",
  );

  return { formStage, setFormStage };
};

export { FormStageProvider };
