export default function Entry(props)
{
    console.log (props)
    return (
        
        <article className="journalEntry">
            
            <div className="main-img-container">
                <img src={props.img.src}
                alt={props.img.alt}
                className="mainImg"
                />
            </div>
            

            <div>
                <img src="/public/marker.png" alt="marker" className="marker" />
                <span>{props.country}</span>
                <a href={props.googleMap}>View On Google Maps</a>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p>{props.text}</p>
            </div>
        </article>
    )
}