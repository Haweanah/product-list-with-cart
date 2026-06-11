export default function Entries(props) {
  return props.quantity === 0 ? (
    <article className="entries">
      <div className="image-wrapper">
  <picture>
    <source
      media="(min-width: 1020px)"
      srcSet={props.image.desktop}
    />

    <source
      media="(min-width: 768px)"
      srcSet={props.image.tablet}
    />

    <img
      src={props.image.mobile}
      alt={props.name}
    />
  </picture>
</div>
      <div className="add-to-cart">
        <button onClick={() => props.increase(props.id)}>
          <img src="/assets/images/images/icon-add-to-cart.svg" alt="" />
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

     <div className="quantity-box">
  <button
    className="decrease-btn"
    onClick={() => props.decrease(props.id)}
  >
    <img
      src="../images/icon-decrement-quantity.svg"
      alt="decrement button"
    />
  </button>

  <span>{props.quantity}</span>

  <button
    className="add-btn"
    onClick={() => props.increase(props.id)}
  >
    <img
      src="/images/icon-increment-quantity.svg"
      alt="increment button"
    />
  </button>
</div>
      <div className="product-list-info">
        <p>{props.category}</p>
        <h3>{props.name}</h3>
        <span>${props.price.toFixed(2)}</span>
      </div>
    </article>
  );
}
