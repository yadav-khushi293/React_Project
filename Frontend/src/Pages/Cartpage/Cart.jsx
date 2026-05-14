import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../Cartpage/Cart.css";

export const Cart = () => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(
    Number(localStorage.getItem("quantity")) || 1,
  );

  const navigate = useNavigate();

  useEffect(() => {
    const api_calling = async () => {
      try {
        const res = await axios.get(
          "https://react-project-1s4c.onrender.com/cart",
        );

        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    api_calling();
  }, []);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      alert("Please Login First!");

      navigate("/login");
    }
  }, []);

  // localStorage se id lena
  const selectedProductId = localStorage.getItem("selectedProductId");

  // matching product find karna
  const product = data.find(
    (p) => p.id == selectedProductId
  );

  // increment
  const handleIncrement = () => {
    const newQty = quantity + 1;

    setQuantity(newQty);

    localStorage.setItem("quantity", newQty);
  };

  // decrement
  const handleDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;

      setQuantity(newQty);

      localStorage.setItem("quantity", newQty);
    }
  };

  // total price
  const totalPrice = product
    ? parseFloat(
        product.price.toString().replace(/,/g, "")
      ) * quantity
    : 0;

  return (
    <>
      {/* Product Section */}
      <div className="product-container1">
        {product && (
          <div className="product-card">
            <div className="prents1">
              <div className="imgdiv">
                <img src={product.img} alt={product.title} />
              </div>

              <div className="Accessoriesdiv">
                <div className="product-info">
                  <h2 className="title1">{product.title}</h2>

                  <div className="details-row">
                    <span>Color: Tan</span>
                    <span>|</span>
                    <span>Vendor: Red Tape</span>
                    <span>|</span>
                    <span>SKU: RBL1129-M</span>
                  </div>

                  <div className="price-section">
                    <span className="discount">Save 70%</span>

                    <div className="price-row">
                      <span className="new-price1">₹ {totalPrice}</span>

                      <span className="old-price">₹ 2,999.00</span>
                    </div>
                  </div>

                  <p className="tax-text">Tax included.</p>

                  <div className="size-section">
                    <p className="size-title">
                      Size: <span>36</span>
                    </p>

                    <div className="size-boxes">
                      <button>34</button>
                      <button className="active-size">36</button>
                      <button>38</button>
                      <button>40</button>
                      <button>42</button>
                    </div>
                  </div>

                  <div className="color-section">
                    <p>Color: Tan</p>

                    <div className="color-circle"></div>
                  </div>

                  {/* Quantity */}
                  <div className="cart-section">
                    <div className="quantity-box">
                      <button onClick={handleDecrement}>-</button>

                      <span>{quantity}</span>

                      <button onClick={handleIncrement}>+</button>
                    </div>

                    <button className="cart-btn">Add To Cart</button>
                  </div>

                  <button className="buy-btn">BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="parents">
        <div className="Description">Description</div>

        <p className="pragraph">
          Embrace sophistication with Red Tape Derby formal shoes for men in
          black, designed for both style and comfort.
        </p>

        {/* Features */}
        <div className="Features">Features</div>

        <div className="card">
          <ul>
            <li>
              <strong>Leather Upper:</strong>
              Premium finish for an elegant formal appearance.
            </li>

            <li>
              <strong>Fabric Lining:</strong>
              Soft lining for comfortable wear all day.
            </li>

            <li>
              <strong>TPR Sole:</strong>
              Offers durability and flexibility.
            </li>
          </ul>
        </div>

        {/* Product Specification */}
        <div className="Features">Product Specification</div>

        <div className="card1">
          <ul>
            <li>
              <strong>Material:</strong>
              Sole – TPR | Upper – Leather
            </li>

            <li>
              <strong>Design:</strong>
              Low-cut Derby shoe style.
            </li>

            <li>
              <strong>Country:</strong>
              India
            </li>
          </ul>
        </div>

        {/* Scroll Products */}
        <div className="you">You may also like</div>

        <div className="scrolldiv">
          {/* Product 1 */}
          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="/Utilis/1_388ae818-38ab-4dce-86bc-b4f2c9c2ed0c.webp"
                className="scrollproduct-img"
                alt=""
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="title">Men's Brown Leather Belt</h3>

              <div className="price-rowscroll">
                <span className="new-pricescroll">₹ 1,019.00</span>

                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="/Utilis/RTE5970_1.webp"
                className="scrollproduct-img"
                alt=""
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="titlescroll">Derby Formal Shoes for Men</h3>

              <div className="price-rowscroll">
                <span className="new-pricescroll">₹ 1,544.00</span>

                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="../../../public/Utilis/1_9cb23573-cf13-47e3-a583-d59a3602cc69.webp"
                className="scrollproduct-img"
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="titlescroll">Derby Formal Shoes for Men</h3>
              <div className="price-rowscroll">
                <span className="new-pricescroll"> ₹ 1,544.00</span>
                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="../../../public/Utilis/1_de5b7462-afed-45de-9775-8390e0c65786.webp"
                className="scrollproduct-img"
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="titlescroll">Derby Formal Shoes for Men</h3>
              <div className="price-rowscroll">
                <span className="new-pricescroll"> ₹ 1,544.00</span>
                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="../../../public/Utilis/2_b121e8dc-4169-4cca-befc-ec22344833ba.webp"
                className="scrollproduct-img"
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="titlescroll">Derby Formal Shoes for Men</h3>
              <div className="price-rowscroll">
                <span className="new-pricescroll"> ₹ 1,544.00</span>
                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="scrollproduct-card">
            <div className="image-section">
              <img
                src="../../../public/Utilis/RSL1323_1.._c48f0960-0d33-441c-970e-7a5b4c4751c9.webp"
                className="scrollproduct-img"
              />
            </div>

            <div className="scrollproduct-info">
              <h3 className="titlescroll">Derby Formal Shoes for Men</h3>
              <div className="price-rowscroll">
                <span className="new-pricescroll"> ₹ 1,544.00</span>
                <span className="old-pricescroll">₹ 2,999.00</span>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
};