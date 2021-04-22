import Products from "./Products";
import React from "react";
import "./App.css";
import Modal from "./Modal";
import ProductDetail from "./ProductDetail";
import Cart from './Cart';
import SearchResults from './searchResults';
import {
  Route,
  Switch,
  withRouter,
  Link
} from "react-router-dom";
var errorString = {
  userName: "Invalid Username",
  email: "Invalid Email Address",
  pw: "Weak Password",
  confirmPw: "Passwords Mismatch",
};
var allProducts = JSON.parse(
  `[{"id":23436737,"name":"Timex leather strap watch in black","imageUrl":"images.asos-media.com/products/timex-leather-strap-watch-in-black/23436737-1-black","text":"$37.00"},{"id":23436741,"name":"Timex chronograph watch with silver dial","imageUrl":"images.asos-media.com/products/timex-chronograph-watch-with-silver-dial/23436741-1-silver","text":"$99.00"},{"id":23436748,"name":"Timex mesh band watch in silver","imageUrl":"images.asos-media.com/products/timex-mesh-band-watch-in-silver/23436748-1-silver","text":"$80.00"},{"id":23436766,"name":"Timex olive watch with fabric strap","imageUrl":"images.asos-media.com/products/timex-olive-watch-with-fabric-strap/23436766-1-green","text":"$62.00"},{"id":23436768,"name":"Timex mesh band watch in silver","imageUrl":"images.asos-media.com/products/timex-mesh-band-watch-in-silver/23436768-1-silver","text":"$89.00"},{"id":23436933,"name":"Timex marlin handwind watch","imageUrl":"images.asos-media.com/products/timex-marlin-handwind-watch/23436933-1-black","text":"$127.00"},{"id":23437214,"name":"Timex marlin handwind watch","imageUrl":"images.asos-media.com/products/timex-marlin-handwind-watch/23437214-1-brown","text":"$169.00"},{"id":23692328,"name":"Brave Soul leather strap watch with stripe detail","imageUrl":"images.asos-media.com/products/brave-soul-leather-strap-watch-with-stripe-detail/23692328-1-black","text":"$28.00"},{"id":23692331,"name":"Brave Soul oversized watch with white dial","imageUrl":"images.asos-media.com/products/brave-soul-oversized-watch-with-white-dial/23692331-1-black","text":"$28.00"},{"id":12919534,"name":"Tommy Hilfiger woven bracelet in silver and black","imageUrl":"images.asos-media.com/products/tommy-hilfiger-woven-bracelet-in-silver-and-black/12919534-1-black","text":"$41.25"},{"id":22925238,"name":"Bolongaro Trevor curb chain bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-curb-chain-bracelet/22925238-1-silver","text":"$23.00"},{"id":23587131,"name":"Tommy Hilfiger men's leather watch in brown 1791837","imageUrl":"images.asos-media.com/products/tommy-hilfiger-mens-leather-watch-in-brown-1791837/23587131-1-brown1","text":"$114.75"},{"id":22925088,"name":"Bolongaro Trevor deboss skull ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-deboss-skull-ring/22925088-1-black","text":"$26.00"},{"id":22925100,"name":"Bolongaro Trevor stone signet ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-stone-signet-ring/22925100-1-silver","text":"$26.00"},{"id":23692013,"name":"Brave Soul faux leather watch","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch/23692013-1-black","text":"$28.00"},{"id":23692018,"name":"Brave Soul stainless steel mesh watch in gold","imageUrl":"images.asos-media.com/products/brave-soul-stainless-steel-mesh-watch-in-gold/23692018-1-gold","text":"$28.00"},{"id":23692330,"name":"Brave Soul faux leather watch with square dial","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch-with-square-dial/23692330-1-black","text":"$28.00"},{"id":23693209,"name":"Bellfield PU strap watch with gold detail","imageUrl":"images.asos-media.com/products/bellfield-pu-strap-watch-with-gold-detail/23693209-1-grey","text":"$42.00"},{"id":23435249,"name":"Versus Versace Buffle Bay watch","imageUrl":"images.asos-media.com/products/versus-versace-buffle-bay-watch/23435249-1-black","text":"$174.00"},{"id":23436344,"name":"Ted Baker stainless steel watch with leather strap","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-watch-with-leather-strap/23436344-1-grey","text":"$253.00"},{"id":23691773,"name":"Brave Soul stainless steel mesh watch","imageUrl":"images.asos-media.com/products/brave-soul-stainless-steel-mesh-watch/23691773-1-black","text":"$28.00"},{"id":23692624,"name":"Bellfield stainless steel mesh watch with square dial","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-mesh-watch-with-square-dial/23692624-1-silver","text":"$42.00"},{"id":23693167,"name":"Bellfield PU strap watch with silver detail","imageUrl":"images.asos-media.com/products/bellfield-pu-strap-watch-with-silver-detail/23693167-1-black","text":"$42.00"},{"id":23693892,"name":"Christin Lars slimline watch with leather strap","imageUrl":"images.asos-media.com/products/christin-lars-slimline-watch-with-leather-strap/23693892-1-black","text":"$32.00"},{"id":23692009,"name":"Brave Soul faux leather watch","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch/23692009-1-black","text":"$28.00"},{"id":23692335,"name":"Brave Soul watch with black strap and white dial","imageUrl":"images.asos-media.com/products/brave-soul-watch-with-black-strap-and-white-dial/23692335-1-black","text":"$28.00"},{"id":23692841,"name":"Bellfield leather-look strap watch with cross over detail","imageUrl":"images.asos-media.com/products/bellfield-leather-look-strap-watch-with-cross-over-detail/23692841-1-brown","text":"$42.00"},{"id":23692851,"name":"Bellfield stainless steel mesh watch with square dial","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-mesh-watch-with-square-dial/23692851-1-gold","text":"$42.00"},{"id":23693202,"name":"Christin Lars adjustable stainless steel mesh watch","imageUrl":"images.asos-media.com/products/christin-lars-adjustable-stainless-steel-mesh-watch/23693202-1-silver","text":"$32.00"},{"id":23693692,"name":"Christin Lars adjustable stainless steel mesh watch","imageUrl":"images.asos-media.com/products/christin-lars-adjustable-stainless-steel-mesh-watch/23693692-1-gold","text":"$32.00"},{"id":23435937,"name":"Versus Versace Republique watch","imageUrl":"images.asos-media.com/products/versus-versace-republique-watch/23435937-1-silver","text":"$174.00"},{"id":23436352,"name":"Ted Baker stainless steel watch with leather strap","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-watch-with-leather-strap/23436352-1-black","text":"$213.75"},{"id":23692634,"name":"Bellfield stainless steel bracelet watch","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-bracelet-watch/23692634-1-gold","text":"$42.00"},{"id":22925084,"name":"Bolongaro Trevor skull stud earings","imageUrl":"images.asos-media.com/products/bolongaro-trevor-skull-stud-earings/22925084-1-silver","text":"$17.00"},{"id":23435234,"name":"Versus Versace La Villette watch","imageUrl":"images.asos-media.com/products/versus-versace-la-villette-watch/23435234-1-pink","text":"$174.00"},{"id":22925086,"name":"Bolongaro Trevor raised skull ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-raised-skull-ring/22925086-1-gold","text":"$26.00"},{"id":22925101,"name":"Bolongaro Trevor beaded bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-beaded-bracelet/22925101-1-brown","text":"$23.00"},{"id":22925103,"name":"Bolongaro Trevor skull etch medalion necklace","imageUrl":"images.asos-media.com/products/bolongaro-trevor-skull-etch-medalion-necklace/22925103-1-silver","text":"$26.00"},{"id":22925106,"name":"Bolongaro Trevor baby belcher chain necklace","imageUrl":"images.asos-media.com/products/bolongaro-trevor-baby-belcher-chain-necklace/22925106-1-silver","text":"$26.00"},{"id":22925241,"name":"Bolongaro Trevor beaded bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-beaded-bracelet/22925241-1-grey","text":"$23.00"},{"id":23435240,"name":"Versus Versace lea watch","imageUrl":"images.asos-media.com/products/versus-versace-lea-watch/23435240-1-red","text":"$158.00"},{"id":23435905,"name":"Ted Baker stainless steel crystal watch","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-crystal-watch/23435905-1-pink","text":"$293.00"},{"id":23436359,"name":"Ted Baker stainless steel and leather watch","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-and-leather-watch/23436359-1-brown","text":"$182.00"},{"id":23435668,"name":"Versus Versace saint germain watch","imageUrl":"images.asos-media.com/products/versus-versace-saint-germain-watch/23435668-1-silver","text":"$174.00"},{"id":23435675,"name":"Versus Versace Simon's Town watch","imageUrl":"images.asos-media.com/products/versus-versace-simons-town-watch/23435675-1-blue","text":"$174.00"},{"id":23435907,"name":"Versus Versace covent garden peti watch","imageUrl":"images.asos-media.com/products/versus-versace-covent-garden-peti-watch/23435907-1-gold","text":"$174.00"},{"id":23435941,"name":"Versus Versace mabillon watch","imageUrl":"images.asos-media.com/products/versus-versace-mabillon-watch/23435941-1-gold","text":"$174.00"},{"id":23435951,"name":"Versus Versace covent garden peti watch","imageUrl":"images.asos-media.com/products/versus-versace-covent-garden-peti-watch/23435951-1-gold","text":"$174.00"}]`
);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModal: false,
      isLoggingIn: true,
      isValidated: false,
      isLoggedIn: false,
      userName: "",
      email: "",
      pw: "",
      confirmPw: "",
      products: [],
      cartItems: [],
      searchQuery: "",
      searchResults: [],
      selectedProduct: {},
      errorMessages: {
        userName: "",
        email: "",
        pw: "",
        confirmPw: "",
      },
      currentUser: {},
    };
    this.changeModalView = this.changeModalView.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.validateIndividialInputs = this.validateIndividialInputs.bind(this);
    this.setErrorMessages = this.setErrorMessages.bind(this);
    this.productClick = this.productClick.bind(this);
    this.addToCart=this.addToCart.bind(this);
    this.searchItemClick=this.searchItemClick.bind(this);
    this.searchProducts=this.searchProducts.bind(this);
  }
  setErrorMessages(errorMessages) {
    this.setState(() => ({
      errorMessages,
    }));
  }


  addToCart(){
    if(this.state.isLoggedIn) {
      this.props.history.push('/cart');
      let tempCarts=JSON.parse(localStorage.carts); //Whole Information
      let tempCartItems=tempCarts[this.state.currentUser.email];  //Current User's Cart
      let tempSelectedProduct=this.state.selectedProduct; //SelectedProduct to be added to Cart
      let isAlreadyInCart=tempCartItems.some((cartItem)=>cartItem.id===tempSelectedProduct.id);
      if(isAlreadyInCart) {
        alert("Product Already in Cart");
        return;
      }
      tempSelectedProduct.quantity=1;  //Setting Initial Quantity to 1
      tempCartItems.push(tempSelectedProduct);
      tempCarts[this.state.currentUser.email]=tempCartItems;
      localStorage.setItem("carts",JSON.stringify(tempCarts));
      this.setState({
        cartItems: tempCartItems
      })
    }
    else{
      alert("Please Login First to add product to Cart");
      this.setState(()=>({
        isLoggingIn: true
      }))
      this.changeModalView();
    }
  }

  searchProducts(e){
    let trimmedSearchQuery=e.target.value;
    trimmedSearchQuery=trimmedSearchQuery.trimStart();
    this.setState({
      searchQuery: trimmedSearchQuery
    },()=>{
      if(this.state.searchQuery==="") {
        this.setState({
          searchResults: []
        });
        return;
      }
      else{
        let tempProducts=this.state.products;
        let searchResults=tempProducts.filter((product)=>product.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
        if(searchResults.length>6){
          searchResults=searchResults.slice(0,6);
        }
        this.setState({
          searchResults
        });
      }
    });
    
  }

  validateIndividialInputs(tempErrorMessages, Regex, inputField) {
    if (!Regex.test(this.state[inputField])) {
      this.setErrorMessages(tempErrorMessages);
    } else {
      tempErrorMessages[inputField] = "";
      this.setErrorMessages(tempErrorMessages);
    }
  }



  validateForm(inputField) {
    if (!this.state.isLoggingIn) {
      let tempErrorMessages = JSON.parse(
        JSON.stringify(this.state.errorMessages)
      );
      switch (inputField) {
        case "userName":
          var userNameRegex = /^[A-Za-z0-9]{3,20}$/g;
          if (this.state[inputField].length === 0) {
            tempErrorMessages[inputField] = "Username cannot be empty";
          } else if (this.state[inputField].includes(" ")) {
            tempErrorMessages[inputField] = "Space is not allowed";
          } else {
            tempErrorMessages[inputField] = "Between 3 to 20 characters";
          }
          this.validateIndividialInputs(
            tempErrorMessages,
            userNameRegex,
            inputField
          );
          break;

        case "email":
          var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (this.state[inputField].length === 0) {
            tempErrorMessages[inputField] = "Email Field Cannot be empty";
          } else if (!this.state[inputField].includes("@")) {
            tempErrorMessages[inputField] = "Please include '@' in the email";
          } else if (!this.state[inputField].includes(".")) {
            tempErrorMessages[inputField] = "Please include '.' in the email";
          } else if (this.state[inputField].includes("..")) {
            tempErrorMessages[inputField] = "Consecutive dots are not allowed";
          } else if (
            this.state[inputField].startsWith("@") ||
            this.state[inputField].startsWith(".") ||
            this.state[inputField].endsWith("@") ||
            this.state[inputField].endsWith(".")
          ) {
            tempErrorMessages[inputField] =
              "'@' or '.' not allowed at beginning or end";
          } else if (
            this.state[inputField].split(".")[
              this.state[inputField].split(".").length - 1
            ].length < 2
          ) {
            tempErrorMessages[inputField] = "Please enter a valid domain";
          } else if (
            [...(this.state[inputField].match(/@/g) || [])].length > 1
          ) {
            tempErrorMessages[inputField] = "Only one '@' allowed";
          } else {
            tempErrorMessages[inputField] = "Invalid Email Address";
          }
          this.validateIndividialInputs(
            tempErrorMessages,
            emailRegex,
            inputField
          );
          break;
        case "pw":
          var pwRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
          if (this.state[inputField].length === 0) {
            tempErrorMessages[inputField] = "Password cannot be empty";
          } else if (!/(?=.*\d)/g.test(this.state[inputField])) {
            tempErrorMessages[inputField] = "Please include atleast one digit";
          } else if (!/(?=.*[a-z])/g.test(this.state[inputField])) {
            tempErrorMessages[inputField] =
              "Please include atleast one lowercase letter";
          } else if (!/(?=.*[A-Z])/g.test(this.state[inputField])) {
            tempErrorMessages[inputField] =
              "Please include atleast one uppercase letter";
          } else if (!/(?=.*[!@#$%^&*])/g.test(this.state[inputField])) {
            tempErrorMessages[inputField] =
              "Pleae include atleast one special Character/Symbol";
          } else if (this.state[inputField].length < 8) {
            tempErrorMessages[inputField] = "Minimum length 8 characters";
          } else {
            tempErrorMessages[inputField] = "Please use a stronger password";
          }
          this.validateIndividialInputs(tempErrorMessages, pwRegex, inputField);
          break;
        case "confirmPw":
          if (this.state.pw !== this.state.confirmPw) {
            tempErrorMessages[inputField] = errorString[inputField];
            this.setState(() => ({
              errorMessages: tempErrorMessages,
            }));
          } else {
            tempErrorMessages[inputField] = "";
            this.setState(() => ({
              errorMessages: tempErrorMessages,
            }));
          }
          break;

        default:
          break;
      }
    }
  }



  productClick(product,event=null){
    this.setState(()=>({
      selectedProduct: product
    }));
  }



  handleChange(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (!this.state.isLoggingIn) {
          this.validateForm(event.target.name);
        }
      }
    );
  }



  handleLogOut() {
    localStorage.setItem("currentUser", "");
    this.setState(() => ({
      isLoggedIn: false,
    }));
    this.props.history.push('/');
  }


  changeForm() {
    this.setState((state) => ({
      isLoggingIn: !state.isLoggingIn,
      userName: "",
      email: "",
      pw: "",
      confirmPw: "",
    }));
  }



  changeModalView() {
    this.setState((state) => ({
      viewModal: !state.viewModal,
    }));
  }




  handleLogin(event) {
    event.preventDefault();
    let existing_users_data = JSON.parse(localStorage.users);
    let currentUserIndex = Number.MIN_VALUE;
    let isAuthenticated = existing_users_data.some((user, index) => {
      currentUserIndex = index;
      return (
        user.email === event.target.email.value &&
        user.pw === event.target.pw.value
      );
    });
    if (isAuthenticated) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(existing_users_data[currentUserIndex])
      );

      console.log(
        `User Authentication: ${
          isAuthenticated ? "Successful" : "Unsuccessful"
        }`
      );
      this.setState(
        () => ({
          isLoggedIn: true,
          email: "",
          pw: "",
          currentUser: existing_users_data[currentUserIndex],
          viewModal: false,
        }),
        () => {
          console.log("Currentuser: ", this.state.currentUser);
        }
      );
      if(JSON.stringify(this.state.selectedProduct)!==JSON.stringify({})){
        this.props.history.push(`/products/${this.state.selectedProduct.id}`);
      }
    } else {
      alert("Sorry! Invalid Email or Password. You cannot log in. :(");
    }
  }




  handleSignUp(event) {
    event.preventDefault();
    if (localStorage.users === undefined)
      localStorage.setItem("users", JSON.stringify([]));
    if(localStorage.carts===undefined) {
      localStorage.setItem("carts",JSON.stringify({}));
    }
    var isAlreadyRegistered;
    if (
      this.state.errorMessages.userName === "" &&
      this.state.errorMessages.email === "" &&
      this.state.errorMessages.pw === "" &&
      this.state.errorMessages.confirmPw === "" &&
      this.state.userName !== "" &&
      this.state.email !== "" &&
      this.state.pw !== "" &&
      this.state.confirmPw !== ""
    ) {
      this.setState(
        () => ({
          isValidated: true,
        }),
        () => {
          console.log("True: ", this.state.isValidated);
          if (localStorage.users !== undefined) {
            let existing_users_data = JSON.parse(localStorage.users);
            isAlreadyRegistered = existing_users_data.some(
              (user) => user.userName === this.state.userName
            );
          }
          if (isAlreadyRegistered) {
            alert("This email Address is already Registered with us.");
            return;
          }
          let user = {
            userID: JSON.parse(localStorage.users).length || 0,
            userName: this.state.userName,
            email: this.state.email,
            pw: this.state.pw,
          };
          let tempusers = JSON.parse(localStorage.users);
          tempusers.push(user);
          localStorage.setItem("users", JSON.stringify(tempusers));
          let tempCarts=JSON.parse(localStorage.carts);
          tempCarts[this.state.email]=[];
          localStorage.setItem("carts",JSON.stringify(tempCarts));
          alert("Signed Up successfully. You can now Log in.");
          this.changeForm();

          console.log(JSON.parse(localStorage.users));
          this.setState(() => ({
            isLoggingIn: true,
            email: "",
            pw: "",
            confirmPw: "",
            userName: "",
          }));
        }
      );
    } else {
      this.setState(
        () => ({
          isValidated: false,
        }),
        () => {
          console.log("False: ", this.state.isValidated);
          alert("Sorry! You can't sign up because form is not validated.");
        }
      );
      return;
    }
  }


  searchItemClick(product,e=null){
    this.setState(()=>({
      searchQuery: "",
      searchResults: [],
      selectedProduct: product
    }),()=>{
      this.props.history.push(`/products/${product.id}`);
    });
  }

  componentDidMount() {
    let products = [];
    fetch(
      "https://asos2.p.rapidapi.com/products/v2/list?offset=0&categoryId=8199&limit=48&store=US&country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "9b4394ee82mshf475d552353b7bfp1f8fa5jsn012efe703d93",
          "x-rapidapi-host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        products = data.products.map((product) => {
          let {
            id,
            name,
            imageUrl,
            price: {
              current: { value },
            },
          } = product;
          let obj = {
            id,
            name,
            imageUrl,
            value
          };
          return obj;
        });
        this.setState(() => ({
          products
        }));
      })
      .catch((err) => {
        products=allProducts;
        this.setState(()=>({
          products
        }));
        throw err;
      });
    
    if(localStorage.currentUser!==undefined && localStorage.currentUser!=="") {
      let tempCurrentUser=JSON.parse(localStorage.currentUser);
      this.setState(()=>({
        isLoggedIn: true,
        currentUser: tempCurrentUser
      }));
    }
  }



  render() {
    return (
      <div className="App">
        <header className="navbar">
          <Link to="/">
            <div className="logo">
              <img src="/flipkart-logo.png" alt="Flipkart" />
          </div>
          </Link>
          <div className="searchBarContainer">
            <input
              type="text"
              value={this.state.searchQuery}
              placeholder="Search Products..."
              className="searchBar"
              onChange={(e)=>this.searchProducts(e)}
            />
          </div>
          {this.state.searchResults.length ? <SearchResults searchItemClick={this.searchItemClick} results={this.state.searchResults} /> : null}
          <div className="userContainer">
            {/* Login / UserName */}
            {this.state.isLoggedIn ? 
            <div className="loggedin">
              <span>{this.state.currentUser.userName}</span>
              <button className="btn-small" onClick={this.handleLogOut}>
                Logout
              </button>
              <div className="cart">
              <a href="/cart"><img src="/shopping-cart-solid.svg" alt="Shopping Cart" width="20" height="20" /> Cart</a>
              </div>
            </div>
             : 
              <button className="btn-small" onClick={this.changeModalView}>
                Login
              </button>
            }
          </div>
        </header>
          <Switch>
            <Route exact path="/">
              <section>
                {/* Product Listing */}
                <Products
                  productClick={this.productClick}
                  products={this.state.products}
                />
              </section>
            </Route>
            <Route path="/products/:productId">
              <ProductDetail 
              productClick={this.productClick}
              addToCart={this.addToCart} />
            </Route>
            <Route path="/cart" render={props=>(
              <Cart {...props} 
              cartItems={this.state.cartItems}
              selectedProduct={this.state.selectedProduct} 
              currentUser={this.state.currentUser} />
            )}>
            </Route>
          </Switch>

        {this.state.viewModal ? (
          <div className="backDrop" onClick={this.changeModalView}></div>
        ) : null}
        {/* Backdrop */}
        {/* Modal for SignUp / Login */}
        <Modal
          view={this.state.viewModal}
          hideModal={this.changeModalView}
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
