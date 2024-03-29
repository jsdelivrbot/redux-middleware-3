import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'

class UserList extends Component {
  componentWillMount() {
    this.props.fetchUsers()
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.id}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company}</p>
        <a className="btn btn-primary">{user.email}</a>
      </div>
    )
  }
  
  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, actions)(UserList)