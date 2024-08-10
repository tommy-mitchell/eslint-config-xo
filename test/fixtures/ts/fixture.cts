import { zipConvert } from "convert-zip-to-gps";

const PRIVATE_KEY = "deadbeef";

function getCoordinates(zipCode: number): string
{
    // some coords have a space in between - remove
    const ll: string[] = (zipConvert(zipCode) as string).split(", ");
    // default zoom level
    const zoom: string = "14z";
    
    const coords: string = ll.concat(zoom).join(",");

    return `@${coords}`;
}

export default function Search(query: string, zipCode: number): Promise<any>
{
    const coordinates = getCoordinates(zipCode);

    const search = {
        engine:  "google_maps",
        q:       query,
        ll:      coordinates,
        api_key: PRIVATE_KEY
    };

    // API?key=value&key=value
    const searchString = Object.keys(search).map(key => [key, search[key]].join("=")).join("&");

    return new Promise<any>(async (resolve, reject) => {
        try {
            const searchResponse = await fetch(`https://serpapi.com/search.json?${searchString}`);
            const searchResults  = (await searchResponse.json()).local_results;

            for await(const result of searchResults)
            {
                const response     = await fetch(`${result.photos_link}&api_key=${search.api_key}`);
                const photosResult = await response.json();
                
                result.photos = photosResult.photos?.map(photos => photos.image)
            }

            resolve(searchResults);
        }
        catch(error) {
            reject(`Fetch failed: ${error}`);
        }
    });
}