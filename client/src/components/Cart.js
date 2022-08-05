

function Cart(props) {
    const {cartItems} = props;
    return <aside className='cart'>
        <h2>Your Cart</h2>
        <div>
            {cartItems.length === 0 ? <div>Cart is Empty</div> :
            cartItems.map((name, index) => {
                        
                return (
            <div>{name}</div>

            )
            })
            }

        </div>
    </aside>
}

export default Cart;