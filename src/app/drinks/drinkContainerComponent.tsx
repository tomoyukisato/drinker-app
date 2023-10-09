import {getDrinks} from "@/hooks/drink/getDrinks";
import { DrinkDataTable } from "./drinkDataTable";
import useFetchDrinks from "@/hooks/drink/useFetchDrinks";
import { Drink } from '@/types/drink';
import axios, { AxiosResponse } from 'axios'

export async function DrinkContainer() {
    const data = await getDrinks();

    console.log("server side")

    console.log("container");
    console.log(data);
    // return <CocktailThumbnail cocktails={data} />;
    return <DrinkDataTable drinks={data} />;
};