import {useState, createContext} from 'react';
import ListStoreItems from  '../components/StoreComponents/ListStoreItems'
import DailyStatus from '../components/StoreComponents/DailyStatus';
import ProductForm from '../components/StoreComponents/ProductForm';
import StoreSearch from '../components/StoreComponents/StoreSearch';

export const ProductContext = createContext()

const MyStore = () => {
    const [products, setProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    const [totalDailyPrice, setTotalDailyPrice] = useState(0);
    const [totalDailyProducts, setTotalDailyProducts] = useState(0);
    const [isSearching, setIsSearching] = useState(false);
    const [productIndexForUpdate, setProductIndexForUpdate] = useState(-1);


    const changeProductsInTheTable = (f_products) => {
        console.log(f_products);
        setFilterProducts([...f_products])
    }


    return  (
        <div style={{margin:40,}}>

            <ProductContext.Provider value={isSearching ? {'products': filterProducts, setProducts, productIndexForUpdate, setProductIndexForUpdate,} : {'products':products, setProducts, productIndexForUpdate, setProductIndexForUpdate}}>
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