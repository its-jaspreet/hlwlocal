import "./styles.css";

import CategoriesCarousel from "./containers/Home/CategoriesCarousel.jsx";
import Header from "./containers/Header/Header";
import SalonsCarousel from "./containers/Home/SalonsCarousel.jsx";
import PartnerStatusCards from "./components/Home/PartnerStatusCard.jsx";
import SalonsGridList from "./containers/Home/SalonsGridList.jsx";
import FaqCards from "./components/Home/FaqCard.jsx";
import ConcernBanner from "./containers/Home/ConcernBanner.jsx";
import PreFooterBanner from "./containers/Home/PreFooterBanner.jsx";
import Footer from "./containers/Footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <Header/>
      {/* <div id="space"></div> */}
      <CategoriesCarousel className="wrapper"/>
      <div className="container">
        <SalonsCarousel heading="Top Rated Salons"/>
        <hr/> <SalonsGridList heading="Near by your area"/>
        <SalonsCarousel heading="Recommended"/>
        <PartnerStatusCards />
        <FaqCards/>
        <ConcernBanner/>
      </div>
      <PreFooterBanner/>
      <Footer/>
    </div>
  );
}