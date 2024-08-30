import * as yup from "yup";
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email address")
    .required("Email is required")
    .max(70, "Email must not be more than 70 characters"),
  password: yup.string().trim().required("Password is required"),
  department: yup.object().shape({
    label: yup.string().required("Department is required"),
    value: yup.string().required("Department is required"),
  }),
});
