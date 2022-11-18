import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { deleteToken } from "../services/Utils";
import { setup } from "../services/authapi";
import { getProductToCart } from "../services/car-shopping-api";
import NavBar from "../components/NavBar";
import "../styles/Layout.css";
import {
  SlMenu,
  SlMenuItem,
  SlIcon,
  SlDropdown
} from "@shoelace-style/shoelace/dist/react";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import logo from "../static/images/logo.png";
import logo2 from "../static/images/logo2.png";



const Layout = ({ cartRedux, setCartToStore, setAuthenticated, setDrawerToStore, authenticatedRedux }) => {
  const navigate = useNavigate();
  const [closeCollapse, setCloseCollapse] = useState(false)
  const [updateCartBadge, setUpdateCartBadge] = useState(false)

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.setItem("userLogged", false)
    setAuthenticated(false)
    setUpdateCartBadge(!updateCartBadge)
    deleteToken()
    setDrawerToStore(false)
    setCartToStore('')
    navigate("/");
  }

  useEffect(() => {
    if (localStorage.getItem("userLogged") == "true") {
      getProductToCart().then(res => {
        setCartToStore(res.data)
      })
    }

  }, [updateCartBadge])

  const redirectToAccount = () => {
    if (setup().authenticatedStatus) {

    } else {
      navigate("/login");

    }
  };

  const handleNavigate = (event) => {
    navigate(event.target.name)
  }



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom navbar-light ">
        <div className="container-fluid ps-5 pe-5">

          <a className="navbar-brand ms-lg-5" href="#">
            <img src={logo2} alt='Logo' className="d-inline-block align-text-top" />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon navbar-dark"></span>

          </button>


          <div className="collapse navbar-collapse" id="navbarNavDropdown" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show" >
            <ul className="navbar-nav navbar-nav-custom ms-auto  mb-2 mb-lg-0 text-center">

              <li className="nav-item" >
                <Link to='/' className="nav-link navbar-collapse" onClick={handleNavigate} name='/'  >Home</Link>
              </li>

              <li className="nav-item">
                <Link to='/about' data-bs-target="#navbarNavDropdown" className="nav-link" onClick={handleNavigate} name='/about' >About</Link>
              </li>

              <li className="nav-item">
                <Link to='/shopAll' className="nav-link" onClick={handleNavigate} name='/shopAll' >Shop All</Link>
              </li>

              <li className="nav-item">
                <Link to='/membership' className="nav-link" onClick={handleNavigate} name='/membership'>Membership</Link>
              </li>

              <li className="nav-item">
                <Link to='/coach' className="nav-link" onClick={handleNavigate} name='/coach'>Coach</Link>
              </li>


              <li className="nav-item">
                {setup().authenticatedStatus ?
                  <Link to='/' className="nav-link" onClick={handleLogout}>Logout</Link>
                  :
                  <a className="nav-link">
                    <SlIcon
                      onClick={redirectToAccount}
                      slot='prefix'
                      name='person-circle'
                      style={{ color: "white" }}
                    />
                  </a>
                }
              </li>


              <li className="nav-item">

                <Link to="cart" className="nav-link d-flex align-items-center justify-content-center mt-1" onClick={handleNavigate} name='cart' >
                  <SlIcon type="button" slot='prefix' name='cart2' style={{ color: "white" }}>

                  </SlIcon>
                  {cartRedux &&

                    cartRedux.products.length > 0 &&
                    <span className="badge rounded-pill bg-danger " style={{ "fontSize": "0.6rem", "fontFamily": "Roboto" }}>{cartRedux.products.length}</span>


                  }

                </Link>

              </li>

            </ul>
          </div>

        </div>
      </nav>



      <Outlet />
      <footer >
        <div className='container'>
          <div id='logo-text' className='links-footer'>
            <h2>iLife Fitness</h2>
          </div>
          <div id='store' className='links-footer'>
            <h3>Store</h3>
            <p>
              <a href=''>Shop</a>
            </p>
            <p>
              <a href=''>Shipping & Returns</a>
            </p>
            <p>
              <a href=''>Store Policy</a>
            </p>
            <p>
              <a href=''>FAQ</a>
            </p>
          </div>
          <div id='contact' className='links-footer'>
            <h3>Contact</h3>
            <p>
              Flacq Coeur de Ville, Centre <br />
              de Flacq, Mauritius <br />
              Tel: 413 4144 <br />
              info@mysite.com
            </p>
          </div>
          <div id='follow-us' className='links-footer'>
            <h3>Follow us</h3>
            <div id='social-network-container'>
              <a
                href='https://www.instagram.com/ilifefitness_mauritius'
                target='_blank'
              >
                <BsInstagram name='instagram'></BsInstagram>
              </a>
              <a
                href='https://www.youtube.com/user/lifefitness'
                target='_blank'
              >
                <BsYoutube name='youtube'></BsYoutube>
              </a>
              <a href='https://www.facebook.com/lfmru' target='_blank'>
                <FaFacebookF name='facebook'></FaFacebookF>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Layout;
