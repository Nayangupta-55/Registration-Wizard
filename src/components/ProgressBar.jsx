const STEP_LABELS = ["Personal Info", "Account Details", "Review & Submit"];

export default function ProgressBar({ currentStep, totalSteps }) {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-wrap">
      <div className="progress-label">
        Step {currentStep} of {totalSteps} — {STEP_LABELS[currentStep - 1]}
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
