import useFetch from "../hooks/useFech";
import DataHandler from "../utils/DataHandler";
import Category from "./Category";

export default function CategoriesList(){
    const {data: categories, loading, error} = useFetch("https://gist.githubusercontent.com/InaSG/9b3254adff6be8f79a01ad596833b288/raw/2d00eb329cc55b014c3ad37715d46588e9531741/categories.json", "category", "fileName");
    console.log(categories);
    return(
        <div className="categories-list">
            <DataHandler loading={loading} error={error}>
                {
                    categories.map((category) => (
                        <Category
                        key={category.id}
                        title={category.title}
                        imgSrc="src\assets\images\category\bonsai.svg"
                        // imgSrc={category.imgSrc}
                        />
                    ))
                }
            </DataHandler>
        </div>
    )
}