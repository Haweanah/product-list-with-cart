export default function OrderConfirmed (props) {
    return (
                
                 <>
                 <div className="order-confirmed-wrapper">
        <div className="success-msg">
            <img src="/public/assets/images/images/icon-order-confirmed.svg" alt="" />
            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>

            <div>
                {props.cartItem}
            </div>

             <div className="total">
            <p>Order Total</p>
            <h3><p>${props.total.toFixed(2)}</p></h3>
        </div>

        
        <form action="">
            <input type="submit" value="Start New Order" />
        </form>
        
            
</div>
         
        

                
               </div>
                 </> 
              )


}