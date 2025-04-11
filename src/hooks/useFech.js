import { useEffect, useState } from "react";

export default function useFetch (url, folder, apiImg) {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

    useEffect (
         () => {
            const fetchData = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch(url);
                    if(!response.ok) {
                        throw new error ("Failed to retrieve data from API");
                    }
                    const data = await response.json();
                    const dataImg = await Promise.all(
                        data.map(async (elem) => {
                            let imgPath;
                            try{
                                imgPath = await import(`../assets/images/${folder}/${elem[apiImg]}`)
                            } catch (error){
                            }
                            return {
                                ...elem, 
                                imgSrc: imgPath.default
                            };
                        })
                    );
                    // await new Promise ((resolve) => 
                    // setTimeout(
                    //     resolve, 5000
                    // ));
                    setData(dataImg);
                }
                catch(error){
                    setError(error.message);
                }
                finally {
                    setLoading(false);
                }
            };
            fetchData();
         }, [url, folder, apiImg]);
         return{data, loading, error};
}