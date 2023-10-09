// import { DrinkContainer } from "./drinkContainerComponent";
import { Suspense } from "react";
import { ReportForm } from "./reportForm";

export default function Page() {
    console.log("reports")
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ReportForm></ReportForm>
        </Suspense>
    )
}