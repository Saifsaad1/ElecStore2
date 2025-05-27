


//import navbar
import Navbar from "./navbar/navbar";

//import front
import Front from "./front/front";

//import arrivals
import Arrivals from "./arrivals/arrivals";

//import products
import Products from "./products/products";

//import iphone-slide
import Iphone_slide from "./iphone-slide/iphone-slide";

//import sales
import Sales from "./sales/sales";

//import about
import About from "./about/about";

//import footer
import Footer from "./footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <Arrivals />
      <Products />
      <Iphone_slide />
      <Sales />
      <About />
      <Footer />
    </div>
  );
}

export default App;
