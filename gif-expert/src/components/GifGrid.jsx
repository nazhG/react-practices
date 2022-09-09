import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    
    const { images, loading, error } = useFetchGifs(category);

    return (
        <>
            <h1>{category}</h1>
            <div className="gif-grid">
                {/* {images.map(({id, images:{downsized_medium:{url}}, title}) => ( */}
                {images.map(image => (
                    /* !loading && (<h2>Cargando ...</h2>) */
                    loading?
                    (<h2>Cargando ...</h2>):
                    GifItem({ ...image })
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
