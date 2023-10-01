import { DrinkDataTable } from "@/components/features/DrinkDataTable";
import useFetchDrinks from "@/hooks/drink/useFetchDrinks";

export const DrinkContainer = () => {
    const { data } = useFetchDrinks();
    console.log("container");
    console.log(data);
    // return <CocktailThumbnail cocktails={data} />;
    return <DrinkDataTable drinks={data} />;
};