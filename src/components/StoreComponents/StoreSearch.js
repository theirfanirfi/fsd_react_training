import { useContext } from 'react';
import { ProductContext } from "../../pages/MyStore";
const StoreSearch = (props) => {
    const { products, setProducts } = useContext(ProductContext);
    return (

        <input type="search" style={{ margin: 8, width: 400, padding: 8 }} placeholder="Search Product by name"
            onChange={(e) => {
                let search = e.target.value
                if (search != '') {
                    props.setIsSearching(true);
                    let filtered_products = products.filter(function (product) {
                        search = search.toLowerCase()

                        if (product.productName.toLowerCase().includes(search) || product.productPrice == search) {
                            return product
                        }
                    });


                    props.setFilterProducts(filtered_products);
                } else {
                    props.setIsSearching(false);
                }
            }}

        />
    )
}

export default StoreSearch;