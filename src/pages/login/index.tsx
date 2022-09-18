import { Box, Stack } from "@mui/material";

import { FormProvider, TextField } from "src/Component/FormComponent";
import styles from "../styles/Home.module.css";

import { useForm } from "react-hook-form";

const LoginPage = () => {
  const methods = useForm({
    // resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, submitCount },
  } = methods;

  const onSubmit = (data) => {
    console.warn("data", data);
  };

  return (
    <FormProvider methods={methods}>
      <Stack spacing={3}>
        <TextField name="email" label="Email" />
        <TextField name="password" label="Password" />
      </Stack>
    </FormProvider>
  );
};

export default LoginPage;
