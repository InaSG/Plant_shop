import "./components_style/Title.css";

export default function Title({text1, text2, showlink}) {
    return(
        <div className="title-box">
            <h2 className="title">
            <span className="green-text">{text1} </span>
            <span>{text2}</span>
            </h2>
            {showlink && (
                <a className='title-link' href="#">shop all &gt;</a>
            )}
        </div>
    )
}