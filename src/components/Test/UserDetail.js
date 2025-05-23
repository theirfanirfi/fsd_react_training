const UserDetail = (props) => {
    let {id, name} = props.user
    return (
        <>
        <h1>ID: {id}</h1>
        <h2>Full name: {name}</h2>
        </>
    )
}

export default UserDetail;