import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Simulator from "./container/Simulator";
import SimulatorResult from "./pages/SimulatorResult";
import Layout from "./container/Layout";
import PrivateRoute from "./container/PrivateRoute";
import Membership from "./container/Membership";
import Home from "./pages/Home";
import ShopAll from "./container/ShopAll";
import Coach from "./container/Coach";
import Login from "./container/Login";
import Register from "./container/Register";
import NoPage from "./pages/NoPage";
import { setup } from "./services/authapi";
import { Provider } from "react-redux"
import store, { setAuthenticated } from './store';
import Cart from "./container/Cart";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import Formregister from "./container/Formregister";
import AboutUs from "./pages/AboutUs";
import Activities from './pages/Activities'
import WeightLoss from './pages/WeightLoss'
import WeightGain from "./pages/WeightGain";
import 'bootstrap/dist/css/bootstrap.min.css';

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.82/dist/"
);


function App() {
  useEffect(() => {
    if (setup().authenticatedStatus) {
      store.dispatch(setAuthenticated(true))
    } else {
      store.dispatch(setAuthenticated(false))

    }
  }, [])

  return (
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>

            <Route element={<PrivateRoute />}>
              <Route path='shopAll' element={<ShopAll />} ></Route>
              <Route path='*' element={<NoPage />}></Route>
              <Route path='simulator_result' element={<SimulatorResult />}></Route>
              <Route path='weightloss' element={<WeightLoss />}></Route>
              <Route path='weightgain' element={<WeightGain />}></Route>
              <Route path='cart' element={<Cart />}></Route>
              <Route path='activities' element={<Activities />}></Route>
              <Route path='coach' element={<Coach />}></Route>
            </Route>
            <Route path='about' element={<AboutUs />}></Route>
            <Route path='membership' element={<Membership />}> </Route>
            <Route path='simulator' element={<Simulator />}></Route>
            <Route path='form-register' element={<Formregister />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
