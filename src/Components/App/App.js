import Products from "../Product/Products";
import React from "react";
import "./App.css";
import Modal from "../userAuth/Modal";
import ProductDetail from "../Product/ProductDetail";
import Cart from "../Cart/Cart";
import { store } from "../../Redux/Store/store";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { getProducts } from "../../Redux/Actions";

//var dummyAllProducts = JSON.parse(`[{"id":23436737,"name":"Timex leather strap watch in black","imageUrl":"images.asos-media.com/products/timex-leather-strap-watch-in-black/23436737-1-black","text":"$37.00"},{"id":23436741,"name":"Timex chronograph watch with silver dial","imageUrl":"images.asos-media.com/products/timex-chronograph-watch-with-silver-dial/23436741-1-silver","text":"$99.00"},{"id":23436748,"name":"Timex mesh band watch in silver","imageUrl":"images.asos-media.com/products/timex-mesh-band-watch-in-silver/23436748-1-silver","text":"$80.00"},{"id":23436766,"name":"Timex olive watch with fabric strap","imageUrl":"images.asos-media.com/products/timex-olive-watch-with-fabric-strap/23436766-1-green","text":"$62.00"},{"id":23436768,"name":"Timex mesh band watch in silver","imageUrl":"images.asos-media.com/products/timex-mesh-band-watch-in-silver/23436768-1-silver","text":"$89.00"},{"id":23436933,"name":"Timex marlin handwind watch","imageUrl":"images.asos-media.com/products/timex-marlin-handwind-watch/23436933-1-black","text":"$127.00"},{"id":23437214,"name":"Timex marlin handwind watch","imageUrl":"images.asos-media.com/products/timex-marlin-handwind-watch/23437214-1-brown","text":"$169.00"},{"id":23692328,"name":"Brave Soul leather strap watch with stripe detail","imageUrl":"images.asos-media.com/products/brave-soul-leather-strap-watch-with-stripe-detail/23692328-1-black","text":"$28.00"},{"id":23692331,"name":"Brave Soul oversized watch with white dial","imageUrl":"images.asos-media.com/products/brave-soul-oversized-watch-with-white-dial/23692331-1-black","text":"$28.00"},{"id":12919534,"name":"Tommy Hilfiger woven bracelet in silver and black","imageUrl":"images.asos-media.com/products/tommy-hilfiger-woven-bracelet-in-silver-and-black/12919534-1-black","text":"$41.25"},{"id":22925238,"name":"Bolongaro Trevor curb chain bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-curb-chain-bracelet/22925238-1-silver","text":"$23.00"},{"id":23587131,"name":"Tommy Hilfiger men's leather watch in brown 1791837","imageUrl":"images.asos-media.com/products/tommy-hilfiger-mens-leather-watch-in-brown-1791837/23587131-1-brown1","text":"$114.75"},{"id":22925088,"name":"Bolongaro Trevor deboss skull ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-deboss-skull-ring/22925088-1-black","text":"$26.00"},{"id":22925100,"name":"Bolongaro Trevor stone signet ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-stone-signet-ring/22925100-1-silver","text":"$26.00"},{"id":23692013,"name":"Brave Soul faux leather watch","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch/23692013-1-black","text":"$28.00"},{"id":23692018,"name":"Brave Soul stainless steel mesh watch in gold","imageUrl":"images.asos-media.com/products/brave-soul-stainless-steel-mesh-watch-in-gold/23692018-1-gold","text":"$28.00"},{"id":23692330,"name":"Brave Soul faux leather watch with square dial","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch-with-square-dial/23692330-1-black","text":"$28.00"},{"id":23693209,"name":"Bellfield PU strap watch with gold detail","imageUrl":"images.asos-media.com/products/bellfield-pu-strap-watch-with-gold-detail/23693209-1-grey","text":"$42.00"},{"id":23435249,"name":"Versus Versace Buffle Bay watch","imageUrl":"images.asos-media.com/products/versus-versace-buffle-bay-watch/23435249-1-black","text":"$174.00"},{"id":23436344,"name":"Ted Baker stainless steel watch with leather strap","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-watch-with-leather-strap/23436344-1-grey","text":"$253.00"},{"id":23691773,"name":"Brave Soul stainless steel mesh watch","imageUrl":"images.asos-media.com/products/brave-soul-stainless-steel-mesh-watch/23691773-1-black","text":"$28.00"},{"id":23692624,"name":"Bellfield stainless steel mesh watch with square dial","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-mesh-watch-with-square-dial/23692624-1-silver","text":"$42.00"},{"id":23693167,"name":"Bellfield PU strap watch with silver detail","imageUrl":"images.asos-media.com/products/bellfield-pu-strap-watch-with-silver-detail/23693167-1-black","text":"$42.00"},{"id":23693892,"name":"Christin Lars slimline watch with leather strap","imageUrl":"images.asos-media.com/products/christin-lars-slimline-watch-with-leather-strap/23693892-1-black","text":"$32.00"},{"id":23692009,"name":"Brave Soul faux leather watch","imageUrl":"images.asos-media.com/products/brave-soul-faux-leather-watch/23692009-1-black","text":"$28.00"},{"id":23692335,"name":"Brave Soul watch with black strap and white dial","imageUrl":"images.asos-media.com/products/brave-soul-watch-with-black-strap-and-white-dial/23692335-1-black","text":"$28.00"},{"id":23692841,"name":"Bellfield leather-look strap watch with cross over detail","imageUrl":"images.asos-media.com/products/bellfield-leather-look-strap-watch-with-cross-over-detail/23692841-1-brown","text":"$42.00"},{"id":23692851,"name":"Bellfield stainless steel mesh watch with square dial","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-mesh-watch-with-square-dial/23692851-1-gold","text":"$42.00"},{"id":23693202,"name":"Christin Lars adjustable stainless steel mesh watch","imageUrl":"images.asos-media.com/products/christin-lars-adjustable-stainless-steel-mesh-watch/23693202-1-silver","text":"$32.00"},{"id":23693692,"name":"Christin Lars adjustable stainless steel mesh watch","imageUrl":"images.asos-media.com/products/christin-lars-adjustable-stainless-steel-mesh-watch/23693692-1-gold","text":"$32.00"},{"id":23435937,"name":"Versus Versace Republique watch","imageUrl":"images.asos-media.com/products/versus-versace-republique-watch/23435937-1-silver","text":"$174.00"},{"id":23436352,"name":"Ted Baker stainless steel watch with leather strap","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-watch-with-leather-strap/23436352-1-black","text":"$213.75"},{"id":23692634,"name":"Bellfield stainless steel bracelet watch","imageUrl":"images.asos-media.com/products/bellfield-stainless-steel-bracelet-watch/23692634-1-gold","text":"$42.00"},{"id":22925084,"name":"Bolongaro Trevor skull stud earings","imageUrl":"images.asos-media.com/products/bolongaro-trevor-skull-stud-earings/22925084-1-silver","text":"$17.00"},{"id":23435234,"name":"Versus Versace La Villette watch","imageUrl":"images.asos-media.com/products/versus-versace-la-villette-watch/23435234-1-pink","text":"$174.00"},{"id":22925086,"name":"Bolongaro Trevor raised skull ring","imageUrl":"images.asos-media.com/products/bolongaro-trevor-raised-skull-ring/22925086-1-gold","text":"$26.00"},{"id":22925101,"name":"Bolongaro Trevor beaded bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-beaded-bracelet/22925101-1-brown","text":"$23.00"},{"id":22925103,"name":"Bolongaro Trevor skull etch medalion necklace","imageUrl":"images.asos-media.com/products/bolongaro-trevor-skull-etch-medalion-necklace/22925103-1-silver","text":"$26.00"},{"id":22925106,"name":"Bolongaro Trevor baby belcher chain necklace","imageUrl":"images.asos-media.com/products/bolongaro-trevor-baby-belcher-chain-necklace/22925106-1-silver","text":"$26.00"},{"id":22925241,"name":"Bolongaro Trevor beaded bracelet","imageUrl":"images.asos-media.com/products/bolongaro-trevor-beaded-bracelet/22925241-1-grey","text":"$23.00"},{"id":23435240,"name":"Versus Versace lea watch","imageUrl":"images.asos-media.com/products/versus-versace-lea-watch/23435240-1-red","text":"$158.00"},{"id":23435905,"name":"Ted Baker stainless steel crystal watch","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-crystal-watch/23435905-1-pink","text":"$293.00"},{"id":23436359,"name":"Ted Baker stainless steel and leather watch","imageUrl":"images.asos-media.com/products/ted-baker-stainless-steel-and-leather-watch/23436359-1-brown","text":"$182.00"},{"id":23435668,"name":"Versus Versace saint germain watch","imageUrl":"images.asos-media.com/products/versus-versace-saint-germain-watch/23435668-1-silver","text":"$174.00"},{"id":23435675,"name":"Versus Versace Simon's Town watch","imageUrl":"images.asos-media.com/products/versus-versace-simons-town-watch/23435675-1-blue","text":"$174.00"},{"id":23435907,"name":"Versus Versace covent garden peti watch","imageUrl":"images.asos-media.com/products/versus-versace-covent-garden-peti-watch/23435907-1-gold","text":"$174.00"},{"id":23435941,"name":"Versus Versace mabillon watch","imageUrl":"images.asos-media.com/products/versus-versace-mabillon-watch/23435941-1-gold","text":"$174.00"},{"id":23435951,"name":"Versus Versace covent garden peti watch","imageUrl":"images.asos-media.com/products/versus-versace-covent-garden-peti-watch/23435951-1-gold","text":"$174.00"}]`);

// var dummySelectedProduct = {
//   id: 23436741,
//   name: "Timex chronograph watch with silver dial",
//   description:
//     'Watch by <a href="/Men/A-To-Z-Of-Brands/Timex/Cat/pgecategory.aspx?cid=4559"><strong>Timex</strong></a><ul>    <li>Something for your wrist</li><li>Model number: TW2R97900</li>    <li>Mesh strap </li>    <li>Stainless steel bezel</li>    <li>Branded dial</li>    <li>Dash markers</li>    <li>Date window </li><li>Backlight feature for visibility in low-light conditions</li>    <li>Chronograph feature</li>    <li>Analogue quartz movement</li>    <li>Folding clasp</li><li>3ATM – water resistant to 30 metres (100 feet)</li><li>Splash and rain-resistant </li>    <li>Two years manufacturer warranty </li>    <li>Comes in a branded box </li></ul>',
//   brandName: "Timex",
//   imageUrl:
//     "images.asos-media.com/products/timex-chronograph-watch-with-silver-dial/23436741-1-silver",
//   price: "99.00",
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewModal: false, //UserContext
      isLoggingIn: true, //UserContext
    };
  }

  changeForm = () => {
    this.setState((state) => ({
      isLoggingIn: !state.isLoggingIn,
    }));
  }

  changeModalView = () => {
    this.setState((state) => ({
      viewModal: !state.viewModal,
    }));
  }

  componentDidMount() {
    store.dispatch(getProducts());
  }

  render() {
    return (
        <div className="App">
              <Navbar changeModalView={this.changeModalView} />          
          <Switch>


            <Route exact path="/">
                <section>
                  {/* Product Listing */}
                  <Products />
                </section>
            </Route>

            <Route path="/product/:productId">
              <ProductDetail changeModalView={this.changeModalView} />
            </Route>

            <Route exact path="/cart">
                <Cart />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
          {this.state.viewModal ? (
            <div className="backDrop" onClick={this.changeModalView}></div>
          ) : null}
          {/* Backdrop */}
          {/* Modal for SignUp / Login */}
          <Modal changeModalView={this.changeModalView} changeForm={this.changeForm} viewModal={this.state.viewModal} isLoggingIn={this.state.isLoggingIn} />
        </div>
    );
  }
}

export default withRouter(App);
