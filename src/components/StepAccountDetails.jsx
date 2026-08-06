import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function StepAccountDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="step">
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="jane@example.com"
          className={errors.email ? "input-error" : ""}
          {...register("email")}
        />
        {errors.email && <span className="error-text">{errors.email.message}</span>}
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <div className="password-input-wrap">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="At least 8 characters"
            className={errors.password ? "input-error" : ""}
            {...register("password")}
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.password && <span className="error-text">{errors.password.message}</span>}
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className="password-input-wrap">
          <input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            placeholder="Re-enter your password"
            className={errors.confirmPassword ? "input-error" : ""}
            {...register("confirmPassword")}
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowConfirm((prev) => !prev)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
          >
            {showConfirm ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="error-text">{errors.confirmPassword.message}</span>
        )}
      </div>
    </div>
  );
}
