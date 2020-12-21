import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value});
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) { // Checking if we get a user with property id will tell us if we got a valid user returned
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })

  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <div>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    type="password" name="password"  id="password" />
                </div>
              </fieldset>
              <div>
                <div className="">
                  <input className="b shadow-3 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 grow dib" 
                    type="button" value="Sign In" onClick={this.onSubmitSignIn} />
                </div>
                <div className="lh-copy mt3">
                  <a href="#0" className="f6 link dim black db" onClick={() => onRouteChange('register')}>Register</a>
                </div>
              </div>
            </div>
          </form>
        </main>
      </article>
    );
  }
};

export default SignIn;