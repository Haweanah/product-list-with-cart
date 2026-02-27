export default function Entries(props) {
  return props.quantity === 0 ? (
    <article className="entries">
      <div className="image-wrapper">
        <img className="mobile-image" src={props.image.mobile} alt={props.name} />
        <img className="desktop-image" src={props.image.desktop} alt={props.name} />
        <img className="tablet-image" src={props.image.tablet} alt={props.name} />
      </div>

      <div className="add-to-cart">
        <button onClick={() => props.increase(props.id)}>
          <img src="/images/images/icon-add-to-cart.svg" alt="" />
          Add to Cart
        </button>
      </div>

      <div className="product-list-info">
        <p>{props.category}</p>
        <h3>{props.name}</h3>
        <span>${props.price.toFixed(2)}</span>
      </div>
    </article>
  ) : (
    <article className="entries">
      <div className="image-wrapper">
        <img 
        className="image-clicked"
        src={props.image.mobile} alt={props.name} />
      </div>

      <button className="quantity-box">
        <button 
        className="decrease-btn"
        onClick={() => props.decrease(props.id)}>
          <img src="/images/images/icon-decrement-quantity.svg" alt="" />
        </button>

        <div className="">{props.quantity}</div>

        <button 
        className="add-btn"
        onClick={() => props.increase(props.id)}>
          <img src="/images/icon-increment-quantity.svg" alt="" />
        </button>
      </button>

      <div className="product-list-info">
        <p>{props.category}</p>
        <h3>{props.name}</h3>
        <span>${props.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
