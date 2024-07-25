import {Component} from 'react'

import './index.css'

class Form extends Component {
  state = {username: '', gender: '', email: '', location: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangeGender = event => this.setState({gender: event.target.value})

  onChangeEmail = event => this.setState({email: event.target.value})

  onChangeLocation = event => this.setState({gender: event.target.value})

  submitForm = event => {
    event.preventDefault()
    const {username, gender, email, location} = this.state
    const details = {username, gender, email, location}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    fetch('http://localhost:3000/users/', options)
  }

  render() {
    const {username, gender, email, location} = this.state
    return (
      <>
        <form id="userForm" onSubmit={this.submitForm}>
          <h1 className="form-heading">User Registration Form</h1>
          <input
            type="text"
            className="user-input"
            value={username}
            onChange={this.onChangeUsername}
            placeholder="Username"
          />
          <input
            type="text"
            className="user-input"
            value={gender}
            placeholder="Gender"
            onChange={this.onChangeGender}
          />
          <input
            type="text"
            className="user-input"
            value={email}
            placeholder="Email"
            onChange={this.onChangeAge}
          />
          <input
            type="text"
            className="user-input"
            value={location}
            placeholder="Location"
            onChange={this.onChangeNumber}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </>
    )
  }
}

export default Form
