import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdate(e, columnName) {
    if (!e.target.value) return;

    updateSetting({ [columnName]: e.target.value });
  }
  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
          disabled={isUpdating}
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          disabled={isUpdating}
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          onBlur={(e) => handleUpdate(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          onBlur={(e) => handleUpdate(e, "breakfastPrice")}
          disabled={isUpdating}
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
