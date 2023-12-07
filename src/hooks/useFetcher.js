import useSWR from "swr";

export const useFetcherObjectNumbers = () => {

    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data } = useSWR("/api/apartments", fetcher);
    const listOfApartmentsNumbers = data?.map((item) => item.objNumber);

    return listOfApartmentsNumbers;
}
