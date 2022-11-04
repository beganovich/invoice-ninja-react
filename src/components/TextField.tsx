import { TextField, InputAdornment } from '@mui/material';
import TextFieldPropsTypes from 'types/components/componentsTypes';

const TextFieldCustom = ({
  label,
  iconStart = null,
  inputProps,
  register = () => {},
  fieldName,
  error = true,
  helperText,
  disabled = false,
  inputRef,
  InputProps,
  required = false,
  multiline = false,
  rows = 0
}: TextFieldPropsTypes): JSX.Element => {
  return (
    <TextField
      FormHelperTextProps={{ sx: { backgroundColor: 'secondary.light', m: '0px' } }}
      InputProps={{
        startAdornment: (iconStart != null) && (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ),
        ...InputProps
      }}
      size="small"
      color="info"
      margin="dense"
      focused
      multiline={multiline}
      rows={rows}
      label={label}
      required={required}
      inputProps={inputProps}
      error={error}
      helperText={helperText}
      inputRef={inputRef}
      disabled={disabled}
      {...register(fieldName)}
      sx={{ width: '100%', backgroundColor: 'secondary.light', mt: 3 }}
    />
  );
};

export default TextFieldCustom;
