import {Component} from 'react'
import './index.css'
import {FaGoogle} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'
import Dashboard from '../Dashboard'

class Login extends Component {
  state = {isTrue: true}
  onChange = event => {
    event.preventDefault()
    this.setState({isTrue: false})
  }
  render() {
    const {isTrue} = this.state
    return (
      <div>
        {isTrue ? (
          <div className="login">
            <div className="box1">
              <h1>Board.</h1>
            </div>
            <div className="box2">
              <div>
                <h1 className="sign-h">Sign In</h1>
                <p className="sign-p">Sign in to your account</p>
                <div className="logg">
                  <button onClick={this.onChange}>
                    <div className="gs">
                      <FaGoogle className="gss" />
                      <p className="gs1">Sign in with Google</p>
                    </div>
                  </button>
                  <button onClick={this.onChange}>
                    <div className="gs">
                      <FaApple className="gss" />
                      <p className="gs1">Sign in with Apple</p>
                    </div>
                  </button>
                </div>
                <form onSubmit={this.onChange}>
                  <label htmlFor="1">Email address</label>
                  <input id="1" />
                  <label htmlFor="2">Password</label>
                  <input id="2" />
                  <p className="fp">Forgot password?</p>
                  <button type="submit" className="bt">
                    Sign in
                  </button>
                </form>
                <p className="dnt">
                  Don’t have an account? <span>Register here</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <Dashboard />
          </div>
        )}
      </div>
    )
  }
}

export default Login
