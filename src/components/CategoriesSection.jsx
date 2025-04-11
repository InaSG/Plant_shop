import CategoriesList from "./CategoriesList"
import Title from "./Title"

export default function CategoriesSection() {
    return(
        <section className="wrapper"> 
            <Title text1={"Shop"} text2={"By category"} showlink={false} />
            <CategoriesList />
        </section>
    )
}