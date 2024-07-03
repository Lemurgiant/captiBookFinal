import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import styled, { useTheme } from "styled-components";
import { BookTrackingGraphSelectProps } from "../interface";
import { StyledInput, StyledSelect } from "../../../components/PrimarySelect";

const BookTrackingGraphSelect = ({
  value,
  onChange,
}: BookTrackingGraphSelectProps) => {
  const theme = useTheme();
  return (
    <FormControl sx={{ minWidth: "10rem" }} size="small">
      <StyledInput id="demo-simple-select-label">Sort by</StyledInput>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Sort by"
        onChange={onChange}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: theme.bg.dark,
            },
          },
        }}
      >
        <MenuItem value={"byEfficiency"}>EFFICIENCY</MenuItem>
        <MenuItem value={"byPagesRead"}>PAGE COUNT</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default BookTrackingGraphSelect;
