import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";
import styled, { useTheme } from "styled-components";
import { ProductivityGraphSelectProps } from "../interface";
import { StyledInput, StyledSelect } from "../../../components/PrimarySelect";

const ProductivityGraphSelect = ({
  value,
  onChange,
}: ProductivityGraphSelectProps) => {
  const theme = useTheme();
  return (
    <FormControl sx={{ minWidth: "10rem" }} size="small">
      <StyledInput id="demo-simple-select-label" sx={{ color: theme.light }}>
        Filter
      </StyledInput>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Filter"
        onChange={onChange}
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: theme.bg.dark,
            },
          },
        }}
      >
        <MenuItem value={"last5days"}>Last 5 days</MenuItem>
        <MenuItem value={"last15days"}>Last 15 days</MenuItem>
        <MenuItem value={"last5weeks"}>Last 5 weeks</MenuItem>
        <MenuItem value={"last15weeks"}>Last 15 weeks</MenuItem>
      </StyledSelect>
    </FormControl>
  );
};

export default ProductivityGraphSelect;
