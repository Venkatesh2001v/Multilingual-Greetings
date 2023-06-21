import './index.css'

const Greetings = props => {
  const {itemDetails} = props
  const {imageUrl, imageAltText} = itemDetails

  return <img className="greet-img" src={imageUrl} alt={imageAltText} />
}

export default Greetings
