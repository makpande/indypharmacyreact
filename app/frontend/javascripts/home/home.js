import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Click Me!'
    };

    this.clickMeUpdate = ::this.clickMeUpdate;
  }

  clickMeUpdate(event) {
    this.setState({
      text: this.state.text.split('').reverse().join('')
    });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <ul className="nav nav-pills pull-left">
            <li className="active"><a href="#">Home</a></li>
              <li><a href="welcome/about">Pharmacy</a></li>
              <li><a href="welcome/contact">Pharmacy Blog</a></li>
            </ul>
            <ul className="nav nav-pills pull-right">
              <li><a href="welcome/about">About</a></li>
              <li><a href="welcome/contact">Contact</a></li>
            </ul>

        </div>

        <div className="jumbotron">
          <h1>Welcome to Pharmacy!</h1>
          <p className="lead">Always a pleasure to Visit Pharmacy Blog.</p>
          <p><a className="btn btn-lg btn-success" href="#">Sign in</a></p>
        </div>

        <div className="row marketing">
          <div className="col-md-4">
            <h4>Services</h4>
            <p>HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.</p>

            <h4>Prescriptions</h4>
            <p>Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.</p>

            <h4>Modernizr</h4>
            <p>Modernizr is an open-source JavaScript library that helps you build the next generation of HTML5 and CSS3-powered websites.</p>

            <h4>ReactJs</h4>
            <h1 className='clickMe' onClick={this.clickMeUpdate}>{this.state.text}</h1>
          </div>
          <div className="col-md-4">
            <h4>Webpack</h4>
            <p>webpack is a module bundler.</p>
            <p>webpack takes modules with dependencies and generates static assets representing those modules.</p>
          </div>
        </div>

        <div className="footer">
          <p>♥ from the Yeoman team</p>
        </div>
      </div>
    );
  }
}

export default Home;
