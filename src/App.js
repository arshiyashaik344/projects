import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from "./components/ProductListing";
import Header from "./components/Header";
// import "./App.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


//Switch got replaced with Routes in react-router-dom v6 version 
{/* <Switch><Route path="/" component={componentName}> </Route></Switch>
<Routes><Route path="/" element={<componentName /> } /></Routes> */}