import {useState, useContext} from 'react';
import { ProductContext } from '../../pages/MyStore';

const ProductForm = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(0)
    const {products, setProducts} = useContext(ProductContext)


        const productSold = (e) => {
        if(productName != '' && productPrice != 0){
        let date =new Date();

        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();

        let product = {
            'time': day+"/"+month+"/"+year,
            'productName': productName,
            'productPrice': productPrice
        }
        console.log(product);

        // setTotalDailyPrice(totalDailyPrice+parseInt(productPrice));
        // setTotalDailyProducts(totalDailyProducts+1)
        setProducts([...products, product])
        setProductName('')
        setProductPrice(0)
    }else {
        alert('Please enter product details');
    }
    }

    return (
                    <div>
                <label>Product Name: </label>
                <input type="text" placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
                />
                
                <label>Product Price: </label>
                <input type="number" placeholder="Product Price"
                onChange={(e) => setProductPrice(parseInt(e.target.value))}
                value={productPrice}
                />
                <button style={{marginLeft:4}} onClick={productSold}>Product Sold</button>
                
            </div>
    )
}

export default ProductForm