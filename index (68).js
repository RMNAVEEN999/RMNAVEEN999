import './index.css'

const PasswordItem = props => {
  const {itemDetails, showPasswords, onDelete} = props
  const {id, website, username, password} = itemDetails
  const handleButton = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="list-container">
        <h1 className="website">{website}</h1>
        <p className="username">{username}</p>
        {showPasswords ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        )}
      </div>
      <button type="button" onClick={handleButton} className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
