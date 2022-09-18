import { useFormContext, Controller } from "react-hook-form";

import { TextField, TextFieldProps } from "@mui/material";

interface IProps {
  name: string;
  readOnly?: boolean;
  size?: string;
}

export default function FormTextField({
  name,
  readOnly,
  size,
  ...other
}: IProps & TextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          inputProps={{ "data-testid": `${name || ""}` }}
          disabled={readOnly}
          fullWidth
          size={size}
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
