
export const callApi = async(category)=>{
    const API_KEY_GIF = '7mWljtd1VN5IV2ZVI1gvIEgKafSbXW7e';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY_GIF}&q=${category}&limit=10`;
    const rptaApi1 = await fetch(URL);
    const {data = []} = await rptaApi1.json();
    

    const objectGifs = data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
    }));

    //console.log(objectGifs);
    return objectGifs;
}