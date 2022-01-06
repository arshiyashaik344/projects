import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector, connect } from "react-redux";

import { setProducts } from "../redux/actions/ProductActions";
import ProductComponent from "./ProductComponent";
import { Component } from "react";

// const ProductListing = () => {

// //   console.log('Products');
//   const products = useSelector((state) => state.allProducts.products);
//   const dispatch = useDispatch();

//   const fetchProducts = useCallback((async () => {
//     const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//         console.log("Err: ", err);
//       });
//     dispatch(setProducts(response.data));
//   }));

//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

  
//   console.log("Products :", products);
//   return (
//     <div className="ui grid container">
//       <ProductComponent />
//     </div>
//   );
// };

class ProductListing extends Component {

  componentDidMount () {
     this.props.setProducts();
  }

  render() {

    console.log(this.props.products);
    return (
      <div className="ui grid container">
        <ProductComponent />
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return { products: state.allProducts.products } ;
}
export default connect(mapStateToProps, {setProducts}) (ProductListing);
