import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      alt="not found"
      src="https://www.google.com/url?sa=i&url=https%3A%2F%2Finternetdevels.com%2Fblog%2Fcreative-404-error-pages&psig=AOvVaw10rvlCNrxByKtd0sHUCcKn&ust=1709195940379000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjBrJvRzYQDFQAAAAAdAAAAABAE"
    />
    <h1>Page Not Found</h1>
    <Link to="/">
      <button type="button">Go Home</button>
    </Link>
  </div>
)

export default NotFound
