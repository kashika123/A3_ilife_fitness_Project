import "../styles/ShopAll.css";
import { SlDivider } from "@shoelace-style/shoelace/dist/react";
import React, { useEffect } from "react";
import Slider from "@material-ui/core/Slider";
import ProductCard from "../container/ProductCard";
import { useState } from "react";
import { fetchAllCategory } from "../services/CategoryApi";
import { fetchAllProducts } from "../services/product-api";
import ShoppingCartDrawer from "../container/ShoppingCartDrawer";
import { FaShoppingCart } from "react-icons/fa";




const ShopAll = ({ drawerRedux }) => {
  // Our States
  const [value, setValue] = useState([130, 760]);
  const [productList, setProductList] = useState();
  const [categoryList, setCategoryList] = useState()
  const [filteredProducts, setFilteredProducts] = useState()
  const [noItems, setNoItems] = useState(false)

  const [spinner, setSpinner] = useState(true)


  // Changing State when price increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  // fetch All Product to API

  useEffect(() => {
    fetchAllProducts().then(res => {
      if (res.status === 200) {
        console.log("test")
        setProductList(res.data)
        setFilteredProducts(res.data)
        setSpinner(false)
        if (!res.data) {
          setNoItems(true)
        }

      }
    })
    fetchAllCategory().then(res => {
      if (res.status === 200) {
        setCategoryList(res.data)
      }
    })
  }, [])

  const openCloseCollapsible = (e) => {
    // e.target.parentElement.querySelector(".nested").classList.toggle("active");
    e.target.classList.toggle("active");
    const content = e.target.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };


  const filterProductByCategory = (e) => {

    const selectedCatId = e.currentTarget.id;
    const collections = document.querySelectorAll(".collection-option");
    collections.forEach((element) => {
      element.classList.remove("selected");
    });
    e.currentTarget.classList.toggle("selected")
    const filteredProductList = selectedCatId ? productList.filter(element => element.categoryId === selectedCatId) : productList
    setFilteredProducts(filteredProductList)
  }

  return (
    <>
      {drawerRedux && <ShoppingCartDrawer />}

      <div>
        <div className="row">
          <h1 className="col text-center mt-5">Shop All</h1>

        </div>
        <div className="row">
          {spinner &&
            <div className="col text-center mt-5">
              <div className="spinner-grow" role="status">
              </div>
            </div>
          }
        </div>


        <section id='product-container'>
          <div className="row justify-content-center">

            <div className="col-12 col-sm-8 col-md-4 col-lg-2">
              <div id='filter-container' className="p-2">
                <h2>Filter by</h2>
                <SlDivider />
                {/* filters */}
                <button className='collapsible' onClick={openCloseCollapsible}>
                  Collection
                </button>
                <div className='content'>
                  <p
                    className='collection-option selected'
                    onClick={filterProductByCategory}
                  >
                    All
                  </p>
                  {categoryList && categoryList.map((category) => (


                    <p
                      className='collection-option'
                      name={category.name}
                      key={category['_id']}
                      id={category['_id']}
                      onClick={filterProductByCategory}
                    >
                      + {category.name}
                    </p>
                  ))}
                </div>
                <SlDivider />
                <button className='collapsible' onClick={openCloseCollapsible}>
                  Price
                </button>
                <div className='content'>
                  <div id='range-container'>
                    <Slider
                      value={value}
                      onChange={rangeSelector}
                      min={130}
                      max={760}
                    />
                    <div id='price-range-display'>
                      <span>Rs{value[0]}</span>
                      <span>Rs{value[1]}</span>
                    </div>
                  </div>
                </div>
                <SlDivider />
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-10 mb-5">
              <div id='product-list-container'>

                <ul>
                  {filteredProducts && filteredProducts.map((item) => (
                    <li>
                      < ProductCard key={item.id} item={item} animated={false} />
                    </li>
                  ))

                  }

                  {noItems && (<p>No Items</p>)}

                </ul>



              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default ShopAll;
