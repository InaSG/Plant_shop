import { useEffect, useState } from "react";
 
export default function useFetch(url, folder, apiImg) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
 
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("failed to retrieve from api");
        }
 
        const jsonData = await response.json();
        const dataImages = await Promise.all(
          jsonData.map(async (elem) => {
            let imgSrc = "";
            try {
              imgSrc = new URL(
                `../assets/images/${folder}/${elem[apiImg]}`,
                import.meta.url
              ).href;
            } catch (error) {
              // console.warn("Nepavyko įkelti paveikslėlio:", elem[apiImg]);
              imgSrc = new URL(
                `../assets/images/${folder}/empty.svg`,
                import.meta.url
              ).href;
            }
 
            return {
              ...elem,
              imgSrc,
            };
          })
        );
 
        setData(dataImages);
        console.log(" Duomenys:", dataImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
 
    fetchData();
  }, [url, folder, apiImg]);
 
  return { data, loading, error };
}