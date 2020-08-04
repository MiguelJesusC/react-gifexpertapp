
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=myKXFvf8Q0UXbJRK1n7QI55A2d78QpRO`
    const resp = await fetch(url);
    console.log(resp)
    const { data } = await resp.json()
    const gifs = data.map(element => {
        return ({
            id: element.id,
            title: element.title,
            url: element.images?.downsized_medium.url
        })
    });
    return gifs
}