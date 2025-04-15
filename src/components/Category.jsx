import "./components_style/Category.css";

export default function Category({title, imgSrc}){
    return(
        <div className="card">
            <img src={imgSrc} alt={title}/>
            <h3 className="card-title">{title}</h3>
        </div>
    )
}