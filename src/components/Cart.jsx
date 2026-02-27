export default function Cart (props) {
    
    return (props.CartNo === 0 ? (
        <div className="cart">
        <div className="cart-info">
            <h2>Your Cart ({props.CartNo})</h2>
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p>Your added items will appear here</p>
  
</div>
        
        </div>
    ) : (
        <div className="cart">
        <div className="cart-info">
            <h2>Your Cart ({props.CartNo})</h2>
            {props.cartItem}
        
            
</div>
        <div className="total">
            <p>Order Total</p>
            <h3><p>${props.total.toFixed(2)}</p></h3>
        </div>

        <div className="cart-carbon">
            <img src="/images/icon-carbon-neutral.svg" alt="carbon neutral icon" />
            <p>This is a  <pre> </pre><strong>carbon-neutral</strong> <pre> </pre>delivery</p>
        </div>

        <form onSubmit={(e) => {
  e.preventDefault()
  props.handleOrderConfirmation()
}}>
            <input type="submit" value="Confirm Order" />
        </form>
        </div>
    )
        
        
    )
}