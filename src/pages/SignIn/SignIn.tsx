import "./SignIn.css"
export default function SignIn() {
  return (
    <div className="login-container"> 
      <div className="login-title">Sign In</div>
      <form className="login-input-box">
        <div className="login-id">
          <label>ID</label>
          <input className="login-input" type="text" name="id" />
        </div>
        <div className="login-pw">
          <label>PASSWORD</label>
          <input className="login-input" type="text" name="pw" />
        </div>
      </form>
    </div>
  )
}
