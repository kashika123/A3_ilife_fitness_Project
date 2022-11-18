import "../styles/ProductCard.css";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { apiUrl } from "../services/apiurl";
import { addProductToCart } from "../services/car-shopping-api";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ item, animated, setDrawerToStore, authenticatedRedux }) => {
  const [productCount, setProductCount] = useState(1);
  const navigate = useNavigate()


  function incrementCount() {
    setProductCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    if (productCount === 0) return;
    setProductCount((prevCount) => prevCount - 1);
  }

  const handleAdd = () => {

    if (authenticatedRedux) {
      addProductToCart({
        products:
          [{
            productId: item._id,
            quantity: productCount
          }]
      }).then(res => {
        setDrawerToStore(true)

      }).catch(err => console.log(err))
    } else {
      navigate('/login')
    }

  }



  const imageClass = animated ? "slider-image" : "slider-image-not-animated";
  const actionContainerClass = animated
    ? "action-container"
    : "action-container display";
  const displayHideActionZone = (key, display) => {
    if (!animated) return;
    const element = document.getElementById(`action-container-${key}`);
    if (display) {
      element.classList.add("display");
    } else {
      element.classList.remove("display");
    }
  };
  return (
    <Grid
      key={item.id}
      className='slider-item'
      onMouseOver={() => {
        displayHideActionZone(item.id, true);
      }}
      onMouseOut={() => {
        displayHideActionZone(item.id, false);
      }}
    >
      <div className='arrival-item-container'>
        {item.isNewArrival &&
          (<span>New Arrivals</span>)

        }
        <img src={apiUrl + item.img} alt='/' className={imageClass} />
      </div>
      <div className='product-description'>
        <h3>{item.name}</h3>
        <div className='price-container'>
          <span className={item.promotionPrice && "normal-product-price"}>{"Rs " + item.normalPrice}</span>
          <span>{item.promotionPrice && ("Rs " + item.promotionPrice)}</span>
        </div>
      </div>
      <div className={actionContainerClass} id={`action-container-${item.id}`}>
        <div className='product-counter'>
          <SlButton variant='text' size='small' onClick={decrementCount}>
            -
          </SlButton>
          <span>{productCount}</span>
          <SlButton variant='text' size='small' onClick={incrementCount}>
            +
          </SlButton>
        </div>
        <SlButton size='large' key="test" pill class='shop-btn-product button-hover' onClick={handleAdd}>
          Add to cart
        </SlButton>
      </div>
    </Grid>
  );
};

export default ProductCard;
