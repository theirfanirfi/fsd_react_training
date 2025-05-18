import {useState, useContext, useEffect} from 'react';
import { ProductContext } from '../../pages/MyStore';

const ProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const {products, setProducts, productIndexForUpdate, setProductIndexForUpdate} = useContext(ProductContext);


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


        const editProductInState = (event) => {
        let prod = products[productIndexForUpdate]

        let productUpdated = {
            ...prod,
            'productName': productName, 
            'productPrice': productPrice, 
        }

        let prods = products
        prods.splice(productIndexForUpdate,1, productUpdated);
        setProducts([...prods]);
        // setIsEditing(false);
        setProductName('')
        setProductPrice(0)
        setProductIndexForUpdate(-1)
        // setProductUpdate({})
    }



    const initateProductUpdate = () => {
        let prod = products[productIndexForUpdate]
        setProductName(prod.productName)
        setProductPrice(prod.productPrice)
    }

    useEffect(()=>{
        if(productIndexForUpdate > -1){
       initateProductUpdate()
        }

    }, [productIndexForUpdate])


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

                <button style={{marginLeft:4}} onClick={productIndexForUpdate > -1 ? editProductInState : productSold}>
                    {productIndexForUpdate > -1 ? 'Edit Product' : 'Product Sold'}
                </button>
                
            </div>
    )
}

export default ProductForm