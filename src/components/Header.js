import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const product = useSelector((state) => state.product);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        {product.id ?
          <> <h2><Link to='/'>Back</Link>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          Product Details </h2> </>
          :
          <h2>Fake Shop</h2>
        }
      </div>
    </div>
  );
};

export default Header;
