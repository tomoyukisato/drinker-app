import { useEffect } from 'react';
// import { Drink } from '@/types/drink';
import axios, { AxiosResponse } from 'axios';

export default function useCreateDrinks(request: string) {
    console.log(JSON.parse(request));
        axios
            .post("/api/drinks", JSON.parse(request))
            .then((res: AxiosResponse<number>) => {
                return res.data
            })
            .catch((error) => {
                return error;
            });

        }