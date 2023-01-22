import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="first_section">
        <img
          src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1920/v1673277784/DigitalCreative/2023/Homepage/wk2-1-11/BPS_Homepage-winter.png"
          alt=""
        />
        <div>
          <button>SHOP NOW</button>
        </div>
      </div>
      {/* first section end*/}

      <h1 style={{ fontWeight: "bold", fontSize: "35px" }}>HOT THIS WEEK</h1>
      <div className="second_section">
        <div></div>
        <div>
          <img
            src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_1440/v1673968097/DigitalCreative/2023/Homepage/wk2-1-11/cep-banner.png"
            alt=""
          />
          <div>
            <div>
              <div style={{ width: "49%" }}>
                <img
                  src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/After-hunt-sub.png"
                  alt=""
                />
                <div>
                  <h1>AFTER THE HUNT</h1>
                  <button>SHOP NOW</button>
                </div>
              </div>
              <div style={{ width: "49%" }}>
                <img
                  src="https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1673279793/DigitalCreative/2023/Homepage/wk2-1-11/BPS_saltwater-sub.png"
                  alt=""
                />
                <div>
                  <h1>SALTWATER</h1>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2nd section end */}
        <h1 style={{ fontWeight: "bolder", fontSize: "30px" }}>
          SHOP BY CATEGORY
        </h1>
      </div>
      {/* 3rd section start */}
      <div className="third_section">
        <div>
          <div>
            <img src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-archery.png" alt="" />
            <h2>ARCHERY</h2>
          </div>
          <div>
            <img src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-optics.png" alt="" />
            <h2>OPTICS</h2>
          </div>
          <div>
            <img src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-hunting-clothing.png" alt="" />
            <h2>HUNTING CLOTHING</h2>
          </div>
          <div>
            <img src="https://assets.basspro.com/image/upload/f_auto,q_auto/v1664485701/DigitalCreative/2022/Homepage/wk39/Cat-hunting-Waders.png" alt="" />
            <h2>HUNTING WADERS</h2>
          </div>
        </div>

      </div>
      {/* 3rd section end  */}
      <div className="fourth_section">
        <img src="last_page.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
