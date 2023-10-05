const Address = (props) =>{
    return(
        <div className="Address">
            <h2>ADDRESS</h2>
            <p>City {props.city}</p>
			<p>Distric: {props.distric}</p>
			<p>Zip : {props.zip}</p>
			<p>Country: {props.country}</p>
        </div>
    )
}
export default Address