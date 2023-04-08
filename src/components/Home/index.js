import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {mode: false}

  onClickBtn = () => {
    const {mode} = this.state
    if (mode) {
      this.setState({mode: false})
    } else {
      this.setState({mode: true})
    }
  }

  render() {
    const {mode} = this.state
    return (
      <div className="home-container">
        <div className="card-container">
          <Message mode={mode} />
          {mode ? (
            <Logout logout={this.onClickBtn} />
          ) : (
            <Login login={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
