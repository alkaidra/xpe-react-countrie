import useSWR from 'swr'
import { Fetch } from '../services/Fetch';

export function useFetch(url) {
    const { data, error, mutate } = useSWR(url, async url => {
        const response = await Fetch.get(url);
        return response.data;
    });
    return { data, error, mutate };
}