import { z } from "zod";

export const strongPasswordRegex =
  /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().regex(strongPasswordRegex, "Invalid password"),
});

export type LoginValues = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  firstName: z.string().min(2, "Too Short!"),
  lastName: z.string().min(2, "Too Short!"),
  email: z.string().email("Invalid email address"),
  password: z.string().regex(strongPasswordRegex, "Invalid password"),
});

export type SignupValues = z.infer<typeof signupSchema>;
