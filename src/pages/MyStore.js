import {useState, createContext} from 'react';
import ListStoreItems from  '../components/StoreComponents/ListStoreItems'
import DailyStatus from '../components/StoreComponents/DailyStatus';
import ProductForm from '../components/StoreComponents/ProductForm';
import StoreSearch from '../components/StoreComponents/StoreSearch';

export const ProductContext = createContext()

const MyStore = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [totalDailyPrice, setTotalDailyPrice] = useState(0);
    const [totalDailyProducts, setTotalDailyProducts] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [productIndexForUpdate, setProductIndexForUpdate] = useState(-1);
    const [productUpdate, setProductUpdate] = useState({});







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

    const changeProductsInTheTable = (f_products) => {
        console.log(f_products);
        setFilterProducts([...f_products])
    }


    return  (
        <div style={{margin:40,}}>

            <ProductContext.Provider value={isSearching ? {'products': filterProducts, setProducts} : {'products':products, setProducts}}>
            <ProductForm />
            <StoreSearch setFilterProducts={changeProductsInTheTable} setIsSearching={setIsSearching} />

            <ListStoreItems />

            <DailyStatus totalDailyPrice={totalDailyPrice}
            totalDailyProducts={totalDailyProducts}
            />
            </ProductContext.Provider>
        </div>
    )
}

export default MyStore;