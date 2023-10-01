import { Drink } from '@/types/drink';
import axios, { AxiosResponse } from 'axios'
import useSWR from 'swr'

export default function useFetchDrinks() {
    const fetcher = (url: string) =>
        axios(url).then((res: AxiosResponse<Array<Drink>>) => {
            console.log("url");
            console.log(url);
            return res.data
        });

    const { data, error, isValidating } = useSWR<Array<Drink>, Error>(
        '/api/drinks',
        fetcher,
        {
            revalidateOnFocus: false
        });
    // console.log("api useCocktail");
    // console.log(data?.drinks);
    return { data, error, isValidating }
}