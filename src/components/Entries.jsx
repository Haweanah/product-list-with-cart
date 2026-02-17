

export default function Entries (props) {
    return (
        <article className="entries">
        <div className="image-wrapper">
            <img src={props.image.mobile} alt={props.name} />
        </div>

        <div className="add-to-cart">
            
            <button><img src="/public/assets/images/images/icon-add-to-cart.svg" alt="" />
            Add to Cart</button>
        </div>

        <div className="product-list-info">
            <p>{props.category}</p>
            <h3>{props.name}</h3>
            <span>{props.price}</span>
        </div>
        </article>
    )
}