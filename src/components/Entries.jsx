export default function Entries(props) {
  const inCart = props.quantity > 0;

  return (
    <article className="entry">
      <div className="image-wrapper">
        <picture>
          <source media="(min-width: 1020px)" srcSet={props.image.desktop} />
          <source media="(min-width: 768px)" srcSet={props.image.tablet} />
          <img src={props.image.mobile} alt={props.name} />
        </picture>

        {!inCart ? (
          <button className="add-btn" onClick={() => props.increase(props.id)}>
            <img
          src="/assets/images/images/icon-add-to-cart.svg"
          alt="add to cart icon"
  />
            Add to Cart
          </button>
        ) : (
          <div className="qty-box">
            <button onClick={() => props.decrease(props.id)}>-</button>
            <span>{props.quantity}</span>
            <button onClick={() => props.increase(props.id)}>+</button>
          </div>
        )}
      </div>

      <div className="info">
        <p>{props.category}</p>
        <h3>{props.name}</h3>
        <span>${props.price.toFixed(2)}</span>
      </div>
    </article>
  );
}