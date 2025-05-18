import {useContext} from 'react';
import { ProductContext } from '../../pages/MyStore';
const DeleteItem = (props) => {
    const {products, setProducts} = useContext(ProductContext);

    const deleteItem = (pName) => {
        let p = products.find(prod => prod.productName == pName);
        let prods = products
        let index = prods.indexOf(p);

        prods.splice(index, 1);

        setProducts([...prods]);
        // setTotalDailyPrice(totalDailyPrice-p.productPrice)
        // setTotalDailyProducts(totalDailyProducts-1)

    }

    return (
           <button onClick={() => deleteItem(props.product.productName)}>Delete</button>
    )
}

export default DeleteItem;