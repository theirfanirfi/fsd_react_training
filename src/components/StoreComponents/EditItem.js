import {useContext} from 'react'
import { ProductContext } from '../../pages/MyStore';
const EditItem = (props) => {

    const {products,setProducts, productIndexForUpdate, setProductIndexForUpdate} = useContext(ProductContext);
        const editProduct = (pName) => {
        // setIsEditing(true);
        let p = products.find(prod => prod.productName == pName);
        let prods = products
        let index = prods.indexOf(p);

        setProductIndexForUpdate(index);

    }

    return (
    <button onClick={() => editProduct(props.product.productName)}>Edit</button>
    )
}

export default EditItem;