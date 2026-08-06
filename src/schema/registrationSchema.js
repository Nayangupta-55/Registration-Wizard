import { z } from "zod";

export const registrationSchema = z
  .object({
    firstName: z
      .string()
      .min(1, "First name is required")
      .min(2, "First name must be at least 2 characters"),
    lastName: z
      .string()
      .min(1, "Last name is required")
      .min(2, "Last name must be at least 2 characters"),
    dob: z
      .string()
      .min(1, "Date of birth is required")
      .refine((val) => new Date(val) < new Date(), {
        message: "Date of birth must be in the past",
      }),
    email: z
      .string()
      .min(1, "Email is required")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const defaultValues = {
  firstName: "",
  lastName: "",
  dob: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const stepFields = {
  1: ["firstName", "lastName", "dob"],
  2: ["email", "password", "confirmPassword"],
  3: [],
};

export const TOTAL_STEPS = 3;

export function isCurrentStepValid(watchedValues, errors, currentStep) {
  const fields = stepFields[currentStep];
  if (!fields.length) return true;

  const hasErrors = fields.some((field) => Boolean(errors[field]));
  const allFilled = fields.every((field) => {
    const value = watchedValues[field];
    return value !== undefined && value !== null && String(value).trim() !== "";
  });

  return allFilled && !hasErrors;
}
