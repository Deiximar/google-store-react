const Description = ({title, category, price}) => {
  return (
    <div class="product-description">
      <h1>{title}</h1>
      <p class="category">{category}</p>
      <p class="price">{price}€</p>
      <hr />
    </div>
  )
}
export default Description;


