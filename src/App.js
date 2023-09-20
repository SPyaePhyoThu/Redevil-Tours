import HeaderPage from "./component/FirstPage/HeaderPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./component/secondPage/About";
import QuoteSection from "./component/ThirdPage/QuoteSection";
import RedCafe from "./component/FourthPage/RedCafe";
import Tours from "./component/FifthPage/Tours";
import BuyTicketPage from "./component/SixthPage/TourTicketPage";
import TourPage from "./component/FifthPage/ToursPage";
import AvailableTickets from "./component/SixthPage/AvailableTickets";
import Payment from "./component/SixthPage/Payment";
import Gallery from "./component/SeventhPage/Gallery";
import FAQ from "./component/EighthPage/FAQ";
import Footer from "./component/NinethPage/Footer";
import FindTicketPage from "./component/SixthPage/FindTicketPage";
import Error from "./UI/Error";

import HomePage from "./HomePage";

const routeer = createRoutesFromElements(
  <Route>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/tours" element={<Tours />} />
    <Route path="/tours/:tourId" element={<TourPage />} />
    <Route path="/FindTicket" element={<FindTicketPage />} />
    <Route path="/AvailableTour" element={<AvailableTickets />} />
    <Route path="/AvailableTour/Payment" element={<Payment />} />
    <Route path="*" element={<Error />} />
  </Route>
);

const router = createBrowserRouter(routeer);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
