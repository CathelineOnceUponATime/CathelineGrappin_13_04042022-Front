function Item ({ image, titre, description }) {
  return (
    <div className='item'>
      <img src={image} alt='item' />
      <h3> {titre} </h3>
      <p> {description} </p>
    </div>
  )
}

export default Item
