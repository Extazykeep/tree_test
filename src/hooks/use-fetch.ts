import { ResponseError } from '@/types';
import { useState, useEffect } from 'react';

export const useFetch = <T>(url: string, options?: RequestInit, skip?: boolean) => {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<ResponseError>();
    const [isLoading, setLoading] = useState(false);

    const sendRequest = async () => {
        setLoading(true);
        const response = await fetch(url, {
            method: 'GET',
            ...options,
        });

        if (!response.ok) {
            const err = await response.json();
            setError(err);
            setLoading(false);
            throw new Error(err?.data?.message);
        }

        let result;
        try {
            result = await response.json();
        } catch (e) {
            setError(e as ResponseError);
            setLoading(false);
            return;
        }
        setData(result);
        setLoading(false);
    };

    useEffect(() => {
        if (!skip) sendRequest();
    }, [url]);

    return { isLoading, data, error, sendRequest };
};
