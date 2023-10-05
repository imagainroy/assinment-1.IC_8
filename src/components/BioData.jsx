const BioData = (props) => {
    console.log(props.children, 'props');
    return (
        <div className="bio-data">
            {props.children}
        </div>
    )
}
export default BioData