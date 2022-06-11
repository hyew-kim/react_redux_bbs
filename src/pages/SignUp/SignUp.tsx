import "../Sign.css"
export default function SignUp() {
  return (
    <div className="login-container"> 
      <div className="login-title">Sign Up</div>
      <form className="login-box">
        <div className="user-name">
          <label>USER NAME</label>
          <input className="login-input" type="text" name="user-name" />
        </div>
        <div className="email">
          <label>EMAIL</label>
          <input className="login-input" type="text" name="email" />
        </div>
        <div className="password">
          <label>PASSWORD</label>
          <input className="login-input" type="text" name="password" />
        </div>
        <div className="submit">
          <button>
            Sign Up 
          </button>
        </div>
      </form>
    </div>
  )
}

