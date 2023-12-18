const Button = (props) => {
    return <button type="button" onClick={() => console.log(`io sono il button ${props.name}`)}>
        {props.pipo}
        </button>
}

export default Button;