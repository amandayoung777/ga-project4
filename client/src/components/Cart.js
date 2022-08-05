

function Cart(props) {
    const {cartItems} = props;
    return <aside className='block col-1'>
        <h2>Your Cart</h2>
        <div>
            {cartItems.length === 0 ? <div>Cart is Empty</div> :
            cartItems.map((name, index) => {
                        
            //     return (
            // <div>{name}</div>

            // )
            {console.log(name)}})
            }

        </div>
    </aside>
}

export default Cart;