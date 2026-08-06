import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  defaultValues,
  stepFields,
  isCurrentStepValid,
  TOTAL_STEPS,
} from "./schema/registrationSchema";
import ProgressBar from "./components/ProgressBar";
import StepPersonalInfo from "./components/StepPersonalInfo";
import StepAccountDetails from "./components/StepAccountDetails";
import StepReview from "./components/StepReview";
import SuccessScreen from "./components/SuccessScreen";
import "./App.css";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const methods = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues,
  });

  const { handleSubmit, trigger, watch, formState } = methods;
  const watchedValues = watch();

  const goNext = async () => {
    const fieldsToValidate = stepFields[currentStep];
    const valid = await trigger(fieldsToValidate);
    if (valid) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const goBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = (data) => {
    console.log("Registration payload:", data);
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  const restart = () => {
    methods.reset(defaultValues);
    setCurrentStep(1);
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (isSubmitted) {
    return <SuccessScreen data={submittedData} onRestart={restart} />;
  }

  const nextDisabled = !isCurrentStepValid(watchedValues, formState.errors, currentStep);

  return (
    <div className="wizard-page">
      <div className="wizard-card">
        <h1 className="wizard-title">Create your account</h1>
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {currentStep === 1 && <StepPersonalInfo />}
            {currentStep === 2 && <StepAccountDetails />}
            {currentStep === 3 && <StepReview />}

            <div className="wizard-actions">
              {currentStep > 1 ? (
                <button type="button" className="btn btn-secondary" onClick={goBack}>
                  Back
                </button>
              ) : (
                <span />
              )}

              {currentStep < TOTAL_STEPS && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={goNext}
                  disabled={nextDisabled}
                >
                  Next
                </button>
              )}

              {currentStep === TOTAL_STEPS && (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
