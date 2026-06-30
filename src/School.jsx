const School = ({ figureClass, img, imgAlt, imgClass, degree, field, school, date }) => {
    return ( 
        <>
            <figure className={figureClass}>
                <img src={img} alt={imgAlt} className={imgClass} />
                <div className="school-text">
                    <h2>{degree}</h2>
                    <h3>{field}</h3>
                    <p>{school}</p>
                    <p>{date}</p>
                </div>
            </figure>
        </>
     );
}
 
export default School;