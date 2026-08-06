import { useFormContext } from "react-hook-form";

export default function StepReview() {
  const { getValues } = useFormContext();
  const data = getValues();

  const rows = [
    { label: "First Name", value: data.firstName },
    { label: "Last Name", value: data.lastName },
    { label: "Date of Birth", value: data.dob },
    { label: "Email", value: data.email },
    { label: "Password", value: "•".repeat(data.password?.length || 0) },
  ];

  return (
    <div className="step">
      <h2 className="review-title">Review your details</h2>
      <div className="review-table">
        {rows.map((row) => (
          <div className="review-row" key={row.label}>
            <span className="review-label">{row.label}</span>
            <span className="review-value">{row.value || "—"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
