import { DrinkContainer } from "./drinkContainerComponent";
import { Suspense } from "react";

export default function Page() {
    console.log("app")
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DrinkContainer />
        </Suspense>
    )
}