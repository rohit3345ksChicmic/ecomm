import Products from './Products';
import React from 'react';
import './App.css';
import Modal from './Modal';
import {withRouter} from 'react-router-dom';
var errorString={
  userName: "Invalid Username",
  email: "Invalid Email Address",
  pw: "Weak Password",
  confirmPw: "Passwords Mismatch"
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      viewModal: false,
      isLoggingIn: true,
      isValidated: false,
      isLoggedIn: false,
      userName: "",
      email: "",
      pw: "",
      confirmPw: "",
      products: [],
      errorMessages: {
        userName: "",
        email: "",
        pw: "",
        confirmPw: ""
      },
      currentUser: {}
    }
    this.showModal=this.showModal.bind(this);
    this.hideModal=this.hideModal.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.changeForm=this.changeForm.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
    this.handleLogOut=this.handleLogOut.bind(this);
    this.handleSignUp=this.handleSignUp.bind(this);
    this.validateForm=this.validateForm.bind(this);
    this.validateIndividialInputs=this.validateIndividialInputs.bind(this);
    this.setErrorMessages=this.setErrorMessages.bind(this);
  }

  setErrorMessages(errorMessages) {
    this.setState(()=>({
      errorMessages
    }));
  }



  validateIndividialInputs(tempErrorMessages,Regex,inputField) {
    if(!Regex.test(this.state[inputField])) {
      this.setErrorMessages(tempErrorMessages);
    }
    else {
      tempErrorMessages[inputField]="";
      this.setErrorMessages(tempErrorMessages);
    }
  }


  validateForm(inputField) {
    if(!this.state.isLoggingIn) {
    let tempErrorMessages=JSON.parse(JSON.stringify(this.state.errorMessages));  
    switch(inputField) {
        case "userName":
          var userNameRegex=/^[A-Za-z0-9]{3,20}$/g;
          if(this.state[inputField].length===0) {
            tempErrorMessages[inputField]="Username cannot be empty";
          }
          else if(this.state[inputField].includes(" ")) {
            tempErrorMessages[inputField]="Space is not allowed";
          }
          else {
            tempErrorMessages[inputField]="Between 3 to 20 characters"
          }
          this.validateIndividialInputs(tempErrorMessages,userNameRegex,inputField);
        break;
        
        case "email":
          var emailRegex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(this.state[inputField].length===0) {
            tempErrorMessages[inputField]="Email Field Cannot be empty";
          }
          else if(!this.state[inputField].includes("@")) {
            tempErrorMessages[inputField]="Please include '@' in the email";
          }
          else if(!this.state[inputField].includes(".")) {
            tempErrorMessages[inputField]="Please include '.' in the email";
          }
          else if(this.state[inputField].includes("..")) {
            tempErrorMessages[inputField]="Consecutive dots are not allowed";
          }
          else if(this.state[inputField].startsWith("@") || this.state[inputField].startsWith(".") || this.state[inputField].endsWith("@") || this.state[inputField].endsWith(".")) {
            tempErrorMessages[inputField]="'@' or '.' not allowed at beginning or end";
          }
          else if(this.state[inputField].split('.')[this.state[inputField].split('.').length-1].length<2) {
            tempErrorMessages[inputField]="Please enter a valid domain";
          }
          else if([...(this.state[inputField].match(/@/g)|| [])].length>1) {
            tempErrorMessages[inputField]="Only one '@' allowed";
          }
          else {
            tempErrorMessages[inputField]="Invalid Email Address"
          }
          this.validateIndividialInputs(tempErrorMessages,emailRegex,inputField);
        break;
        case "pw":
          var pwRegex=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
          if(this.state[inputField].length===0) {
            tempErrorMessages[inputField]="Password cannot be empty";
          }
          else if(!(/(?=.*\d)/g.test(this.state[inputField]))) {
            tempErrorMessages[inputField]="Please include atleast one digit";
          }
          else if(!(/(?=.*[a-z])/g.test(this.state[inputField]))) {
            tempErrorMessages[inputField]="Please include atleast one lowercase letter";
          }
          else if(!(/(?=.*[A-Z])/g.test(this.state[inputField]))) {
            tempErrorMessages[inputField]="Please include atleast one uppercase letter";
          }
          else if(!(/(?=.*[!@#$%^&*])/g.test(this.state[inputField]))) {
            tempErrorMessages[inputField]="Pleae include atleast one special Character/Symbol";
          }
          else if(this.state[inputField].length<8) {
            tempErrorMessages[inputField]="Minimum length 8 characters"
          }
          else {
            tempErrorMessages[inputField]="Please use a stronger password";
          }
          this.validateIndividialInputs(tempErrorMessages,pwRegex,inputField);
        break;
        case "confirmPw":
          if(this.state.pw!==this.state.confirmPw) {
            tempErrorMessages[inputField]=errorString[inputField];
            this.setState(()=>({
              errorMessages: tempErrorMessages
            }))
          } 
          else {
            tempErrorMessages[inputField]="";
            this.setState(()=>({
              errorMessages: tempErrorMessages
            }));
          }
        break;
        
        default:
        break;
      }
    }
      
  }



  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
  },()=>{
    if(!this.state.isLoggingIn) {
      this.validateForm(event.target.name);
    }
  });
  }


  handleLogOut() {
    localStorage.setItem("currentUser","");
    this.setState(()=>({
      isLoggedIn: false
    }));
  }

  changeForm(){
    this.setState((state)=>({
      isLoggingIn: !state.isLoggingIn
    }));
  }


  showModal(){
    this.setState(()=>({
      viewModal: true
    }))
  }


  hideModal() {
    this.setState(()=>({
      viewModal: false
    }));
  }


  handleLogin(event) {
    event.preventDefault();
      let existing_users_data=JSON.parse(localStorage.users);
      let currentUserIndex=Number.MIN_VALUE;
      let isAuthenticated=existing_users_data.some((user,index)=>{
        currentUserIndex=index;
        return user.email=== event.target.email.value && user.pw === event.target.pw.value
      });
      if(isAuthenticated) {
        localStorage.setItem("currentUser",JSON.stringify(existing_users_data[currentUserIndex]));
        
        console.log(`User Authentication: ${isAuthenticated?"Successful":"Unsuccessful"}`);  
        this.setState(()=>({
          isLoggedIn: true,
          currentUser: existing_users_data[currentUserIndex],
          viewModal: false
        }),()=>{
          console.log("Currentuser: ",this.state.currentUser);
        });
      }
      else {
        alert("Sorry! Invalid Email or Password. You cannot log in. :(");
      }
  }


  handleSignUp(event) {
  event.preventDefault();
  if(localStorage.users===undefined) localStorage.setItem("users",JSON.stringify([]));
  var isAlreadyRegistered;
  if((this.state.errorMessages.userName===""  
       && this.state.errorMessages.email==="" 
       && this.state.errorMessages.pw==="" 
       && this.state.errorMessages.confirmPw==="" ) &&
       (this.state.userName!=="" && this.state.email!=="" && this.state.pw!=="" && this.state.confirmPw!=="")) {
         this.setState(()=>({
           isValidated: true
         }),()=>{
           console.log("True: ",this.state.isValidated);
           if(localStorage.users!==undefined) {
            let existing_users_data=JSON.parse(localStorage.users);
            isAlreadyRegistered=existing_users_data.some(user=> user.userName===this.state.userName);
          }
          if(isAlreadyRegistered) {
            alert("This email Address is already Registered with us.");
            return;
          }
          let user={
            userID: JSON.parse(localStorage.users).length || 0,
            userName: this.state.userName,
            email: this.state.email,
            pw: this.state.pw
          }
          let tempusers=JSON.parse(localStorage.users);
          tempusers.push(user);
          event.target.reset();
            localStorage.setItem("users",JSON.stringify(tempusers));
            alert("Signed Up successfully. You can now Log in.");
            console.log(JSON.parse(localStorage.users));
            this.setState(()=>({
              isLoggingIn: true,
              email: "",
              pw: "",
              confirmPw: "",
              userName: ""
            }));
         });
       }
      else {
        this.setState(()=>({
          isValidated: false
        }),()=>{
          console.log("False: ",this.state.isValidated);
          alert("Sorry! You can't sign up because form is not validated.");
        });
        return;
      }
  }
  

  componentDidMount(){
    let products=[]
    fetch("https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=1930&limit=50&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "412f4e8868mshfce7a47c092f508p1b67dfjsncfe1239e3622",
        "x-rapidapi-host": "asos2.p.rapidapi.com"
      }
    })
    .then(response => response.json())
    .then(data=>{
      products=data.products.map((product)=>{
        let {id,name,imageUrl,price:{current:{text}}}=product;
        let obj={
          id,
          name,
          imageUrl,
          text
        }
        return obj;
      });
      this.setState(()=>({
        products
      }));
    })
    .catch(err => {
      console.error(err);
    });

  }
  render(){
    return (
      <div className="App">
        <header className="navbar">
          <div>
            {/* Image */}
          </div>
          <div>
            {/* Search bar */}
          </div>
          <div>
            {/* Login / UserName */}
            {this.state.isLoggedIn ? this.state.currentUser.userName  : <button onClick={this.showModal}>Log In</button>}
          </div>
          <div>
            {/* Logout */}
            {this.state.isLoggedIn ? <button onClick={this.handleLogOut}> Logout </button> : null}
          </div>
          <div>
            {/* Cart */}
          </div>
        </header>
        <section>
          {/* Product Listing */}
          <Products products={this.state.products} />
        </section>
        {this.state.viewModal? <div className="backDrop" onClick={this.hideModal}></div> : null}
          {/* Backdrop */}
          {/* Modal for SignUp / Login */}
          <Modal 
          view={this.state.viewModal} 
          hideModal={this.hideModal} 
          isLoggingIn={this.state.isLoggingIn} 
          changeForm={this.changeForm} 
          handleChange={this.handleChange}
          email={this.state.email}
          pw={this.state.pw}
          confirmPw={this.state.confirmPw}
          userName={this.state.userName}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
          errorMessages={this.state.errorMessages}
          />
      </div>
    );
  }
}

export default withRouter(App);
