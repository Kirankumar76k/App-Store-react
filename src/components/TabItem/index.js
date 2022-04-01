// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onFilterTabItems, isActive} = props
  const {tabId, displayText} = tabDetails

  const ActiveTabItemClassName = isActive ? 'active-tab-item' : ''

  const onClickTabItem = () => {
    onFilterTabItems(tabId)
  }
  return (
    <li key={tabId}>
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-item-btn ${ActiveTabItemClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
