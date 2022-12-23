import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { navStruct } from './Components/NavBar/Utils';
import './App.scss'
import NavBar from './Components/NavBar/NavBar';
import Login from './Pages/AuthPages/Login';
import SignUp from './Pages/AuthPages/SignUp';
import Profile from "./Pages/Dashboard/Profile"
import WelcomePage from "./Pages/Dashboard/WelcomePage"
import { SignUpFun,LoginFun,resetPasswordFun } from './utils';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Guest from './Components/RequireAuth/Guest';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idToken:""||localStorage.getItem("idToken"),
      email:""||localStorage.getItem("email"),
      navStruct:navStruct,
    };

  }
  setIdToken(idToken,email){
    this.setState({
      "idToken":idToken,
      "email":email,
    });
    localStorage.setItem("idToken",idToken);
    localStorage.setItem("email",email);
  }
  render() {
    console.log(this.state.email);
    return (
      <BrowserRouter>
      <div className={"app "}>
        <header className="app__header">
          <NavBar setIdToken={this.setIdToken.bind(this)}/>
        </header>
        <main className="app__main">
          {/* <Login setIdToken={this.setIdToken.bind(this)}/> */}
          {/* <SignUp setIdToken={this.set  `IdToken.bind(this)}/>
          <Profile setIdToken={this.setIdToken.bind(this)} idToken={this.state.idToken}/> */}
        <Routes>
          <Route path='/' element={<RequireAuth idToken={this.state.idToken}><WelcomePage/></RequireAuth>}/>
          <Route path='/login' element={<Guest idToken={this.state.idToken}><Login setIdToken={this.setIdToken.bind(this)}/></Guest>}/>
          <Route path='/signup' element={<Guest idToken={this.state.idToken}><SignUp setIdToken={this.setIdToken.bind(this)}/></Guest>}/>
          <Route path='/profile' element={<RequireAuth idToken={this.state.idToken}><Profile setIdToken={this.setIdToken.bind(this)} idToken={this.state.idToken}/></RequireAuth>}/>
          <Route path='*' element={<div className='notfound' idToken={this.state.idToken}>404</div>}/>

        </Routes>
        </main>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
