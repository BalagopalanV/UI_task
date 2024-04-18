import "./scss/design.scss";
import Firstsection from "./pages/Firstsection";
import Secondsection from "./pages/SecondSection";
import Thirdsection from "./pages/Thirdsection";
import Fourthsection from "./pages/Fourthsection";
import Review from "./component/Review";
import Navbar from "./pages/Navbar";
// import purpleStart from "../app/asset/image/img_purple_start.svg";
export default function Main() {
  const title = ["New", "Dresses", "Winter wear", "Designer", "Sale"];

  return (
    <section className="main">
      <Navbar />
      <Firstsection />
      <Secondsection />
      <Thirdsection />
      <div className="product-status-contianer">
        <div className="content">
          <Review value={"25k"} text={"Trusted customer"} color={"#3c88fa"} />
          <Review value={"10k"} text={"Products"} color={"#fa8f3c"} />
          <Review value={"1k"} text={"Total Outlets"} color={"#ae6efd"} />
          <Review value={"2000k"} text={"Product Delivery"} color={"#fa5664"} />
        </div>
      </div>

      <Fourthsection />
    </section>
  );
}
