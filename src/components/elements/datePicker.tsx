"use client";
import { Box } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export const DatePickerComponent = () => {
    return (
        <Box sx={{ m: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="いつですか？？" />
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    );
};
