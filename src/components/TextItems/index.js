import './index.css'

const TextItems = props => {
  const {itemsDetails} = props
  const {name} = itemsDetails
  const lengthOfCharacter = name ? name.length : ''
  return (
    <li>
      <p>{name}</p>
      <p>{lengthOfCharacter}</p>
    </li>
  )
}
export default TextItems
