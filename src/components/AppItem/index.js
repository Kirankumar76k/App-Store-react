// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, appId, imageUrl} = appDetails

  return (
    <li key={appId} className="app-item-card">
      <img src={imageUrl} alt={appName} className="app-img-cls" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}
export default AppItem
