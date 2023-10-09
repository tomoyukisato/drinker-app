import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import 
export const DrinkTypeComponent = () => {

    return (
        <FormControl fullWidth sx={{ m: 1, mt: 5 }}>
            <InputLabel
                id="demo-simple-select-label"
                error={isSelectAmountError}
            >
                ドリンク1杯の量（ml）
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={inputedDataMlPerOneDrink}
                label="ドリンク1杯の量（ml）"
                onChange={handleChangeMlPerOneDrinkSelectBox}
                error={isSelectAmountError}
            >
                {mlPerOneDrinks.map((option, i) => (
                    <MenuItem value={option.value} key={i}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
            {isSelectAmountError ? (
                <FormHelperText id="my-helper-text" error>
                    ドリンク1杯の量は選択必須項目です
                </FormHelperText>
            ) : (
                ""
            )}
        </FormControl>
    );
};
