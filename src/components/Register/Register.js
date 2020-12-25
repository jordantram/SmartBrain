import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  onSubmitRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) { // Checking if we get a user with property id 
                       // will tell us if we got a valid user returned
          this.props.loadUser(user);
          this.props.onRouteChange('signin');
        }
      })

  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <div>
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Register</legend>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Name</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    onChange={this.onNameChange} type="text" name="name"  id="name" />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    onChange={this.onEmailChange} type="email" name="email-address"  id="email-address" />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                    onChange={this.onPasswordChange} type="password" name="password"  id="password" />
                </div>
              </fieldset>
              <div>
                <div className="">
                  <input className="b shadow-3 ph3 pv2 input-reset ba b--black bg-transparent pointer f6 grow dib" 
                    type="button" value="Register" onClick={this.onSubmitRegister} />
                </div>
              </div>
            </div>
          </form>
        </main>
      </article>
    );
  }
};

export default Register;