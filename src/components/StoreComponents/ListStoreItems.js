import {useContext} from 'react';
import ListItem from "./ListItem";
import TableHead from "./TableHead";

import {ProductContext} from '../../pages/MyStore'

const ListStoreItems = () => {

    const {products, setProducts} = useContext(ProductContext)

    return (
        <table border="1" style={{ margin: 20 }}>
            <TableHead />
            {products.map(p => {
                return <ListItem product={p} />
            })

        }
        </table>
    )
}

export default ListStoreItems;