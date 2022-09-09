const apiKey = 'A07HrU4mpwd3QJrQOpxFzc263Qivb8YH';

export const getGifs = async (category) => {
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&api_key=${apiKey}&limit=10`)
        .catch(error => console.log(error));
    const {data} = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        url: img.images.downsized_medium.url,
        title: img.title
    }) );

    return gifs
}
