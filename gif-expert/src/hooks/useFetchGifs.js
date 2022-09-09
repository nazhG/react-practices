import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const fetchGifs = async () => {
            try {
                const images = await getGifs(category);
                setImages(images);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }
        fetchGifs();
    } , [category]);
    return { images, loading, error };
}