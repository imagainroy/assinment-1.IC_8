const Contactinfo = (props) =>{
    return(
        <div className="Contact">
            <h2>CONTACT INFO</h2>
            <p>Email: {props.email}</p>
			{props.phone && <p>Phone: {props.phone}</p>}
			<p>LinkedIn: {props.linkedin}</p>
			<p>Facebook: {props.facebook}</p>
        </div>
    )
}
export default Contactinfo