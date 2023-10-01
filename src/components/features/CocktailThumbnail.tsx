import { Alert, ImageList, ImageListItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from 'next/image';

interface CocktailListProps {
    cocktails?: CocktailDrinks
}

export function CocktailThumbnail({ cocktails }: CocktailListProps) {
    console.log("cocktails")
    console.log(cocktails)
    if (!cocktails) {
        return <Alert severity="info">No Drink Information</Alert>
    }
    return (
        <ImageList
            cols={3}
        >

            {cocktails.drinks.map((item) => (
                <ImageListItem key={item.strDrinkThumb} >
                    <Image
                        src={`${item.strDrinkThumb}?w=164&h=164&fit=crop&auto=format`}
                        alt={item.strDrink}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}

        </ImageList >
    );
}