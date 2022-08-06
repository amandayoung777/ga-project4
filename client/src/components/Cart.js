

function Cart(props) {
    const {cartItems} = props;
    return <div className='cart'>
        <h3>Your Cart</h3>
        <div>
            {cartItems.length === 0 ? <div>Cart is Empty</div> :
            cartItems.map((name, index) => {
                        
                return (
            <div>{name}</div>


            )
            })
            }

        </div>
    </div>
}

export default Cart;