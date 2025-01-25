import * as React from "react";
import FormField from "@cloudscape-design/components/form-field";
import Textarea from "@cloudscape-design/components/textarea";

const Input = () => {
  return (
    <FormField
      label={
        <span>
          Enter Hours of Sleep <i>- optional</i>{" "}
        </span>
      }
    >
      <Textarea />
    </FormField>
  );
}

export default Input