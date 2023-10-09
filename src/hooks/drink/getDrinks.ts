import { Drink } from "@/types/drink";
import { GetServerSideProps } from "next";


export const getDrinks = (async () => {
    // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
    // https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props
    const response = await fetch("http://localhost:3000/api/drinks");
    const data = await response.json();
    console.log("#########")
    console.log(data)
    console.log("^^^^^^^^^")
    return data

}) satisfies GetServerSideProps<{
    data: Array<Drink>
}>