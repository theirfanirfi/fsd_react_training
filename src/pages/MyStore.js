import {useState} from 'react';
const MyStore = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [products, setProducts] = useState([])
    const [filteredProducts, setfilteredProducts] = useState([])
    const [totalDailyPrice, setTotalDailyPrice] = useState(0);
    const [totalDailyProducts, setTotalDailyProducts] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [productIndexForUpdate, setProductIndexForUpdate] = useState(-1);
    const [productUpdate, setProductUpdate] = useState({});


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

        setTotalDailyPrice(totalDailyPrice+parseInt(productPrice));
        setTotalDailyProducts(totalDailyProducts+1)
        setProducts([...products, product])
        setProductName('')
        setProductPrice(0)
    }else {
        alert('Please enter product details');
    }
    }

    const deleteItem = (pName) => {
        let p = products.find(prod => prod.productName == pName);
        let prods = products
        let index = prods.indexOf(p);

        prods.splice(index, 1);

        setProducts([...prods]);
        setTotalDailyPrice(totalDailyPrice-p.productPrice)
        setTotalDailyProducts(totalDailyProducts-1)

    }

    const editProductInState = (event) => {
        let productUpdated = {
            ...productUpdate,
            'productName': productName, 
            'productPrice': productPrice, 
        }

        let prods = products
        prods.splice(productIndexForUpdate,1, productUpdated);
        setProducts([...prods]);
        setIsEditing(false);
        setProductName('')
        setProductPrice(0)
        setProductIndexForUpdate(-1)
        setProductUpdate({})
    }

    const editProduct = (pName) => {
        setIsEditing(true);
        let p = products.find(prod => prod.productName == pName);
        let prods = products
        let index = prods.indexOf(p);

        setProductIndexForUpdate(index);
        setProductName(p.productName)
        setProductPrice(p.productPrice)
        setProductUpdate(p);

        // prods.splice(index, 1);

        // setProducts([...prods]);
        // setTotalDailyPrice(totalDailyPrice-p.productPrice)
        // setTotalDailyProducts(totalDailyProducts-1)

    }

    return  (
        <div style={{margin:40,}}>
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
                {isEditing ? 
                <button onClick={editProductInState} style={{marginLeft:4}}>Edit Product</button>
                :
                <button onClick={productSold} style={{marginLeft:4}}>Product Sold</button>
                }
            </div>

            <input type="search" placeholder="Search Product by name"
                onChange={(e) => {

                let filtered_products = products.filter(function (product){
                    let search = e.target.value
                    search = search.toLowerCase()

                        if(product.productName.toLowerCase().includes(search) || product.productPrice == search){
                            return product
                        }
                    });


                setfilteredProducts(filtered_products);
                

                }}

                />
            <table border="1" style={{margin:20}}>
                <thead>
                    <th>#</th>
                    <th>Time</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Delete</th>
                    <th>Edit</th>

                </thead>

                {filteredProducts.length ==0 && products.map(p => {
                    return (
                        <tr>
                        <td>1</td>
                        <td>{p.time}</td>
                        <td>{p.productName}</td>
                        <td>{p.productPrice}</td>
                        <td>
                            <button onClick={() => deleteItem(p.productName)}>Delete</button>
                        </td>

                        <td>
                            <button onClick={() => editProduct(p.productName)}>Edit</button>
                        </td>
                    </tr>
                    )
                })

                }

{filteredProducts.length > 0 && filteredProducts.map(p => {
                    return (
                        <tr>
                        <td>1</td>
                        <td>{p.time}</td>
                        <td>{p.productName}</td>
                        <td>{p.productPrice}</td>
                        <td>
                            <button onClick={() => deleteItem(p.productName)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => editProduct(p.productName)}>Edit</button>
                        </td>

                        
                    </tr>
                    )
                })

                }

            </table>

            <h2>Daily Price: {totalDailyPrice}</h2>
            <h2>Daily Sold Products: {totalDailyProducts}</h2>


        </div>
    )
}

export default MyStore;