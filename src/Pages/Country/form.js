import React, { memo, useMemo } from "react";
import TextField from "@material-ui/core/TextField";
import { useFormStyles } from "./styles";
import { useQuery } from "@apollo/react-hooks";
import { FETCH_COUNTRY_BY_CODE } from "./gql";

const inputProps = {
  type: "text",
  InputLabelProps: {
    shrink: true
  },
  InputProps: {
    readOnly: true
  }
};
const Form = ({ code }) => {
  const formClasses = useFormStyles();

  const { data } = useQuery(FETCH_COUNTRY_BY_CODE, {
    variables: {
      code
    }
  });

  const country = useMemo(() => (data ? data.country : {}), [data]);

  return (
    <>
      <TextField
        id="country-name"
        label="name"
        name="name"
        value={country.name}
        className={formClasses.fieldStyle}
        {...inputProps}
      />

      <TextField
        id="country-emoji"
        label="emoji"
        value={country.emoji}
        className={formClasses.fieldStyle}
        name="emoji"
        {...inputProps}
      />

      <TextField
        id="country-native"
        label="native"
        value={country.native}
        className={formClasses.fieldStyle}
        name="native"
        {...inputProps}
      />

      <TextField
        id="country-phone"
        label="phone"
        value={country.phone}
        className={formClasses.fieldStyle}
        name="phone"
        {...inputProps}
      />

      <TextField
        id="country-currency"
        label="currency"
        value={country.currency}
        name="currency"
        className={formClasses.fieldStyle}
        {...inputProps}
      />
    </>
  );
};

export default memo(Form);
