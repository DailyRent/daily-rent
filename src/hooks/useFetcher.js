import { GetData } from "@/fetch/clientFetch";


export const useFetcherObjectNumbers = () => {
    const { data } = GetData();
    const listOfApartmentsNumbers = data?.map((item) => item.objNumber);

    return listOfApartmentsNumbers;
}