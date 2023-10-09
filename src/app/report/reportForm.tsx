import { DatePickerComponent } from "@/components/elements/datePicker";
import { Label } from "@mui/icons-material";
import { Container, TextField } from "@mui/material";
import { HowManyDrinkComponent } from "./_components/howManyForm";

export function ReportForm() {
    return (
        <>
            <Container>
                <h3>どれぐらい飲んだ？</h3>

                <DatePickerComponent />
                <HowManyDrinkComponent />
            </Container>
        </>
    );
}
