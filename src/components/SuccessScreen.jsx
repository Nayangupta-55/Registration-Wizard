export default function SuccessScreen({ data, onRestart }) {
  return (
    <div className="wizard-page">
      <div className="wizard-card success-card">
        <div className="success-icon">✓</div>
        <h1 className="wizard-title">Registration complete</h1>
        <p className="success-text">
          Welcome, {data?.firstName}! Your account has been created successfully.
        </p>
        <button type="button" className="btn btn-primary" onClick={onRestart}>
          Register another account
        </button>
      </div>
    </div>
  );
}
