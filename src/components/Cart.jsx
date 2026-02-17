export default function Cart (props) {
    return (
        <div className="cart">
        <div className="cart-info">
            <h2>Your Cart ({props.CartNo})</h2>
        <img src="/public/assets/images/images/illustration-empty-cart.svg" alt="" />
        <p>Your added items will appear here</p>
  
</div>
        
        </div>
        
    )
}