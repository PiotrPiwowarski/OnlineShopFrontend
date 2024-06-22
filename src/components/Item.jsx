const Item = ({ item }) => {
    return (
        <div className='item'>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.type}</p>
            <p>{item.availability}</p>
            <p>{item.description}</p>
        </div>
    );
}

export default Item;