import * as yup from "yup";

const newChatSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is a required field"),
  })
  .required();

export default newChatSchema;
