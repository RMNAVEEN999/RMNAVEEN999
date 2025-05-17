import {Component} from 'react'

import {v4 as uuIdv4} from 'uuid'

import PasswordItem from '../PasswordItem'

// eslint-disable-next-line import/no-unresolved
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordList: [],
    showPasswords: false,
  }

  onWebsite = event => this.setState({website: event.target.value})

  onUsername = event => this.setState({username: event.target.value})

  onPassword = event => this.setState({password: event.target.value})

  onSearchInput = event => this.setState({searchInput: event.target.value})

  toggleShowPasswords = () => {
    this.setState(prevState => ({
      showPasswords: !prevState.showPasswords,
    }))
  }

  AddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    const newPassword = {
      id: uuIdv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletePassword = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      searchInput,
      passwordList,
      showPasswords,
    } = this.state

    const filteredList = passwordList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="password-container">
          {/* Add Password Form */}
          <form onSubmit={this.AddPassword} className="add-container">
            <h1>Add New Password</h1>
            <div className="initial-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="imag"
              />
              <input
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.onWebsite}
              />
            </div>
            <div className="initial-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="imag"
              />
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.onUsername}
              />
            </div>
            <div className="initial-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="imag"
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={this.onPassword}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>

          {/* Filter and Search */}
          <div className="filter-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="image"
              />
              <input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onSearchInput}
              />
            </div>
            <div className="check-container">
              <input
                type="checkbox"
                checked={showPasswords}
                id="showPasswords"
                onChange={this.toggleShowPasswords}
              />
              <label htmlFor="showPasswords">Show Passwords</label>
            </div>
          </div>

          {/* Password List or Empty View */}
          {filteredList.length === 0 ? (
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="Image"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="password-list">
              {filteredList.map(each => (
                <PasswordItem
                  key={each.id}
                  itemDetails={each}
                  showPasswords={showPasswords}
                  onDelete={this.deletePassword}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
