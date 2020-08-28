import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tab1: "Login",
      tab1Route: "/login",
      tab2: "Sign Up",
      tab2Route: "/signup",
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (sessionStorage.getItem("email") !== null) {
        this.setState({
          tab1: "Account",
          tab1Route: "/profile",
          tab2: "Logout",
          tab2Route: "/logout",
        });
      }
    }, 200);
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {
      edge: "right",
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul id="slide-out" class="sidenav" style={{width: "90%"}}>
            <li>
              <a href="#!">
                <i class="material-icons">add_shopping_cart</i>My <span className="teal-text">Cart</span>
              </a>
            </li>
            <li>
              <div className="row">
              	<div className="col s12 m6"><button style={{width: "100%"}} className="btn" disabled>Total Price : Rs 12000.00</button></div>
		<div className="col s12 m6"> <button style={{width: "100%"}} className="btn">Check Out</button></div>
              </div>
              
             
            </li>
            <li>
              <div class="divider"></div>
            </li>
            <li>
              <a class="subheader">Current items</a>
            </li>
            <li>
              <a class="waves-effect" href="#!">
                Third Link With Waves
              </a>
            </li>
          </ul>

          <div className="nav-wrapper grey darken-3">
            <Link to="/">
              <li className="brand-logo">RW Jewellery</li>
            </Link>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">About us</a>
              </li>
              <li>
                <a href="badges.html">Jewellery</a>
              </li>
              <li>
                <a href="collapsible.html">Collections</a>
              </li>
              <li>
                <Link to="/onlinestore">Online Store</Link>
              </li>
              <li>
                <a href="mobile.html">Services</a>
              </li>

              <li>
                <a href="mobile.html">Contact</a>
              </li>
              <li>
                <Link to={this.state.tab1Route}>{this.state.tab1}</Link>
              </li>
              <li>
                <Link to={this.state.tab2Route}>{this.state.tab2}</Link>
              </li>
              <li>
                <img
                  alt=""
                  src={sessionStorage.getItem("profileImg")}
                  style={{
                    height: "30px",
                    width: "30px",
                    verticalAlign: "-10px",
                    borderRadius: "5px",
                    marginRight: "5px",
                  }}
                />
              </li>
              <li>
                <a
                  href="#"
                  id="cartSection"
                  data-target="slide-out"
                  class="sidenav-trigger"
                >
                  <i class="material-icons">add_shopping_cart</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">About us</a>
          </li>
          <li>
            <a href="badges.html">Jewellery</a>
          </li>
          <li>
            <a href="collapsible.html">Collections</a>
          </li>
          <li>
            <a href="mobile.html">Online Store</a>
          </li>
          <li>
            <a href="mobile.html">Services</a>
          </li>
          <li>
            <a href="mobile.html">Contact</a>
          </li>
          <li>
            <a href="mobile.html">Login</a>
          </li>
          <li>
            <a href="mobile.html">Sign up</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar;
