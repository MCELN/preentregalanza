import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div style = {{fontSize: "2.5rem", margin: "0 auto", marginTop: "7rem", padding: "2rem", border: "solid 2px gold", width: "80%"}}>
            {greeting}
        </div>
    )
}

export default ItemListContainer
