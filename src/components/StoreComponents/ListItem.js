import DeleteItem from "./DeleteItem";

const ListItem = (props) => {
    let {product} = props
    return (
        <tr>
                        <td>1</td>
                        <td>{product.time}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>
                         <DeleteItem product={product} />
                        </td>

                        <td>
                            <button>Edit</button>
                        </td>
                    </tr>
    )
}

export default ListItem;