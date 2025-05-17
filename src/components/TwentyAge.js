const TwentyAge = (props) => {
    let {username, age} = props
    return (
        <div>
        <h1>{username} age is {age}</h1>
        <button onClick={() => {
            props.changeAge(parseInt(age)-1);
        }}>Decrement</button>

        </div>
    )
}

export default TwentyAge;