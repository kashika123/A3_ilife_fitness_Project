import "../styles/Home.css";
import bodyBuilder from "../static/images/home/young-fitness-man-studio.jpg";
import bodyBuilderWoman from '../static/images/home/fitness-woman-body-simulator.jpg'
import dietwgain from '../static/images/home/diet-weightgain.png'
import dietwloss from '../static/images/home/diet-weightloss.png'
import girlbody from '../static/images/home/girl-body.png'
import { apiUrl } from "../services/apiurl";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SlButton,
  SlCheckbox,
  SlInput,
  SlMenuItem,
  SlSelect,
  SlTextarea,
} from "@shoelace-style/shoelace/dist/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ProductCardHome from "../components/ProductCardHome";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../services/product-api";
import { fetchAllCategory } from "../services/CategoryApi";
const Home = () => {

  const [ProductList, setProductList] = useState([]);
  const [CategoryList, setCategoryList] = useState([])

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  const navigate = useNavigate();
  const reditectToShopAll = () => {
    navigate("/shopAll");
  };

  useEffect(() => {
    fetchAllProducts().then(res => {
      if (res.status === 200) {
        setProductList(res.data)
      }
    })
    fetchAllCategory().then(res => {
      if (res.status === 200) {
        setCategoryList(res.data)
      }
    })
  }, [])

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (

    <>
      <div id="container-fluid">

        <section id='section-one'>
          <div className='media'>

            <div id='image-container'>
              <img src={bodyBuilder} alt='bodyBuilder' />
            </div>
            <div className="position-absolute top-0 bottom-0 right-0 left-0 w-100 h-100">
              <div className="row justify-content-start  align-items-start align-items-lg-center  h-100 p-2">
                <div className="col-lg-1"></div>
                <div className="col-lg-4 col-12 ">
                  <div id='text-collection' className='w3-animate-left text-center text-lg-start'>
                    <h1>
                      Welcome to ilifetness Gym
                    </h1>
                    <p className="mt-5">
                      Are you ready to bring something new and fresh to your everyday life? Now with ilifefitness gym everyone can be heatlhy and fit.
                    </p>
                    <p>

                      Come and enjoy in our modern and positive ambience, affordable for everyone.
                    </p>
                    <SlButton
                      type='submit'
                      size='large'
                      pill
                      className='shop-btn button-hover mt-5'
                      onClick={() => navigate('activities')}
                    >
                      Discover our Activities
                    </SlButton>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>



        <section id='section-body-simulator'>

          <div className='simulator-container'>



            <img src={bodyBuilderWoman} alt='bodyBuilder-Woman' className="bodyBuilder-Woman" />
            <div className="position-absolute top-0 bottom-0 right-0 left-0 w-100">
              <div className="row justify-content-start  align-items-start align-items-lg-center p-2 h-100">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 col-12">
                  <div id='text-collection' className='w3-animate-left text-center text-lg-start'>
                    <h1>
                      Fit Global solution
                    </h1>
                    <p className="mt-5">
                      With our variety of activities for every fitness level, working hard while having fun is the perfect formula to integrade the sport in your everyday routine.<br></br>
                      Our passionate and proffesional team will help you to achieve your goals whether is to lose weight or just to be healthy and fit.
                    </p>

                    <div className="row justify-content-center w-100 mt-5">
                      <div className="col-12 ms-5 ps-md-0">

                        <div className="btn-simulator">
                          <div className="circle-simulator position-absolute top-0">
                            <div className="img-simulator">
                              <img src={girlbody} alt="body girl" ></img>
                            </div>
                          </div>

                          <div className="position-absolute mt-4 ps-3 lg-0">
                            <div className="row ps-5">
                              <div className="col-12 text-center">
                                <SlButton
                                  type='submit'
                                  size='large'
                                  pill
                                  className='shop-btn button-hover btn-simulator-hover'
                                  onClick={() => navigate('/simulator')}>
                                  BODY SIMULATOR
                                </SlButton>
                              </div>
                            </div>
                            <div className="row ps-1">
                              <div className="col-12 text-center ps-4">
                                <div className="simulator-text-btn ps-4">
                                  <p>BODYSUIT SIMULATOR. <br></br>DISCOVER YOUR BODY OF TOMORROW  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>



                  </div>
                </div></div>
            </div>



          </div>
        </section>

        <section id='section-diet'>

          <div className="row justify-content-center">
            <h1 className="col-12 text-center mt-5">The Diet Plan</h1>
          </div>

          <div className="row justify-content-center">
            <p className="col-11  text-center mt-5">
              ilifetness Gym takes care of everyone’s nutritions. We do provide our members an efficient customised diet plan for vegetarians and non veg also verified by our expert nutrionist
            </p>
          </div>

          <div className="row justify-content-center">

            <SlButton
              type='submit'
              size='large'
              pill
              className='button-hover btn-diet col-11  text-center mt-3 mb-5'
              onClick={() => navigate("coach")}
            >
              Discover our Professionals
            </SlButton>

          </div>

          <div className="row justify-content-center">

            <div className="col-12 col-lg-6 p-4 p-sm-0 p-lg-5">
              <div className="diet-plan">
                <div className="weight-loss">
                  <div className="click-weight text-center" onClick={() => navigate("weightloss")}>
                    <img src={dietwloss} alt='diet-weight-loss ' className="diet-weight-loss img-fluid mx-auto" />
                    <div className="diet-weight-background img-fluid mx-auto">
                      <h1 className="diet-weight-loss-p img-fluid mx-auto ">Diet plan for weight loss</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 p-4 p-sm-0 mt-md-1 p-lg-5">
              <div className="diet-plan">
                <div className="weight-gain" >
                  <div className="click-weight text-center" onClick={() => navigate("weightgain")}>
                    <img src={dietwgain} alt='diet-weight-gain' className="diet-weight-gain img-fluid mx-auto " />
                    <div className="diet-weight-background img-fluid mx-auto">
                      <h1 className="diet-weight-loss-p img-fluid mx-auto">Diet plan for weight gain</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </section>



        <section id='section-two'>

          <div className="row justify-content-center p-2">
            <h1 className="col-11  text-center mt-5">Our Gym Equipments on Sale</h1>
          </div>

          <div className="row justify-content-center">
            <p className="col-11  text-center mt-5 fw-bolder">
              We even sell our gym equipments. Being our gym member, you will get 20% discount on our gym equipments.
            </p>
          </div>

          <div id='image-gallery-container'>
            <BsChevronLeft
              size={30}
              onClick={slideLeft}
              className='gallery-chevron'
            />
            <div id='slider'>
              {ProductList.map((item) => (
                <ProductCardHome key={item.id} item={item} animated={true} />
              ))}
            </div>
            <BsChevronRight
              size={30}
              onClick={slideRight}
              className='gallery-chevron'
            />
          </div>



        </section>


        <section id='section-three'>
          <h1 className="mt-5">Shop by Collection</h1>
          <div id='category-list-container'>
            <div className="row justify-content-center">
              {CategoryList.map((item) => (
                <div className='category-item col-4 text-center mt-5' key={item.id}>
                  <div className='overlay'></div>
                  <img src={apiUrl + item.img} alt='/' className='slider-image' />
                  <p >{item.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div id='newsletter'>
            <h1 className="text-center mt-5">Subscribe to Our Newsletter</h1>
            <form onSubmit={handleSubmit} autocomplete='off'>
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9">
                  <SlInput
                    name='firstName'
                    label='First Name'
                    pill
                    autocomplete='off'
                    className="home-input"

                  />
                </div>

                <div className="col-12 col-lg-9">
                  <br />
                  <SlInput
                    name='lastName'
                    label='Last Name'
                    pill
                    autocomplete='off'
                    className="home-input"
                  />
                </div>


                <div className="col-12 col-lg-9">

                  <br />
                  <SlInput
                    variant='email'
                    label='Email'
                    required
                    pill
                    autocomplete='off'
                    className="home-input"
                  />

                </div>
                <br />
                <div className="col-10 col-lg-7">

                  <SlCheckbox required className="terms-and-conditions">I accept the terms & conditions</SlCheckbox>
                </div>
                <br />
                <br />

                <div className="row justify-content-center">
                  <div className="col-5 col-sm-3 col-md-3 col-lg-2 text-center">

                    <SlButton
                      type='submit'
                      size='medium'
                      pill
                      className='button-hover submit-news-letter'
                    >
                      Submit
                    </SlButton>

                  </div>
                </div>

              </div>
            </form>
          </div>
        </section>
      </div >
    </>
  );
};
export default Home;
