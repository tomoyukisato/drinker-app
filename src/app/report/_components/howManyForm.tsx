"use client";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import React from "react";
import { ChangeEvent } from "react";

export const HowManyDrinkComponent = () => {
    const [inputCups, setInputCups] = React.useState("");
    const [isInputError, setIsInputError] = React.useState(false);
    const handleChangeCups = (event: ChangeEvent<HTMLInputElement>) => {
        setInputCups(event.target.value);
        event.target.value === ""
            ? setIsInputError(true)
            : setIsInputError(false);
    };
    return (
        <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel error={isInputError}>何杯飲みましたか？</InputLabel>
            <OutlinedInput
                label="何杯飲んだかを教えてください。"
                value={inputCups}
                onChange={handleChangeCups}
                error={isInputError}
            />
            {isInputError ? (
                <FormHelperText id="my-helper-text" error>
                    ちゃんと何杯飲んだのかを教えてください
                </FormHelperText>
            ) : (
                ""
            )}
        </FormControl>
    );
};
