import React from 'react';

// props = {
//   login: true || false
// }

// if props.login is true return login form
// else return create account form

export default props => {
  let login = props.login
  return (
    <div className="auth-page">
      <div className='auth-intro'>
        Take control of your news.
      </div>
      <div className='auth-form'>
      {
        !login ?
        (
            <div className="form-box">
              <form>
                <input type="text" placeholder="email" />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <input type="submit" />
              </form>
            </div>
        )
        : <h2>LOGIN</h2>
      }
        <div className="form-box">
          Don't have an account?
          <p onClick={testFunc}>Sign up.</p>
        </div>
      </div>
    </div>
  )
}

const testFunc = e => {
  console.log(e)
}
