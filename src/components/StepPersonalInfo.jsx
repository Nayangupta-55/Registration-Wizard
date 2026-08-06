import { useFormContext } from "react-hook-form";

export default function StepPersonalInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="step">
      <div className="field">
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Jane"
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName")}
        />
        {errors.firstName && <span className="error-text">{errors.firstName.message}</span>}
      </div>

      <div className="field">
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Doe"
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName")}
        />
        {errors.lastName && <span className="error-text">{errors.lastName.message}</span>}
      </div>

      <div className="field">
        <label htmlFor="dob">Date of Birth</label>
        <input
          id="dob"
          type="date"
          className={errors.dob ? "input-error" : ""}
          {...register("dob")}
        />
        {errors.dob && <span className="error-text">{errors.dob.message}</span>}
      </div>
    </div>
  );
}
