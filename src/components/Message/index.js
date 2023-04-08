import './index.css'

const Message = props => {
  const {mode} = props
  const message = mode ? 'Welcome User' : 'Please Login'

  return <h1 className="message">{message}</h1>
}

export default Message
