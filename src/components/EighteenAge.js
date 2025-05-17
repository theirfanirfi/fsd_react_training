const EighteenAge = (props) => {
    let {username, age, changeAge} = props
    return (
        <div>
        <h1> {username} age is {age}</h1>
        <button onClick={() => {
            changeAge(parseInt(age)+1)
        }}>Increment</button>
        </div>
    )
}

export default EighteenAge;