import './index.css'

const Buttons = props => {
  const {itemDetails, isActive, clickBtn} = props
  const {buttonText, id} = itemDetails
  const btnClassName = isActive ? 'active-btn' : 'empty-btn'

  const onClickBtn = () => {
    clickBtn(id)
  }

  return (
    <li className="button-list">
      <button className={btnClassName} type="button" onClick={onClickBtn}>
        {buttonText}
      </button>
    </li>
  )
}

export default Buttons
