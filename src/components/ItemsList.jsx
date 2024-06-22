import Item from './Item';
import { getAllItems } from '../services/itemsService';
import { useState, useEffect } from 'react'

const ItemsList = () => {

    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await getAllItems();
            console.log(response);
            setItemsList(response.data);
        }
        fetchItems();
    }, [])

    return (
        <div>
            {itemsList.map(item => {
                return <Item key={item.id} item={item} />
            })}
        </div>
    );
}

export default ItemsList;