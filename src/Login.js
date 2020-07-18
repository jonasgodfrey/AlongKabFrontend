import React, { Component } from 'react'
import {PostData} from './Views/PostData'
import {Redirect} from 'react-router-dom'
export default class Login extends Component {

  constructor(props){
    super(props);
    this.state ={
        username:'',         
        password:'',
        redirect:false,

    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    
}

login(){
    if(this.state.username && this.state.password){
        PostData('login', this.state).then ((result)=>{
            let responseJSON = result;
            if(responseJSON.userData){ 
                sessionStorage.setItem('userData', responseJSON );
                this.setState({redirect: true});    
            }
            else{
               console.log("Login Error"); 
            }
        });

    }
   

}

onChange(e){
    this.setState({[e.target.name]: e.target.value});


}

    render() {
      if(this.state.redirect){
        return(<Redirect to={'/dashboard'}/>)
      }
        return (
           <div>
  <div className="hold-transition login-page">
  <div className="login-box">
    <div className="login-logo">
      <a href="fake_url"><b>Along</b>Kab</a>
    </div>
    {/* /.login-logo */}
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Welcome Admin</p>
        {/* <form action="" method=""> */}
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="username" placeholder="username" onChange={this.onChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" name="password" onChange={this.onChange}/>
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
       
          <div className="row">
            
            {/* /.col */}
            <div className="col-4">
            <input type="submit" value="Login" className="button" onClick={this.login}/>
            </div>
            {/* /.col */}
          </div>
      
      </div>
      {/* /.login-card-body */}
    </div>
  </div>
</div>
</div>

        )
    }
}
