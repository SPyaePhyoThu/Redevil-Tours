import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Tours from "./component/Tours";
import Payment from "./component/Payment";
import Footer from "./component/Footer";
import Error from "./ui/Error";
import HomePage from "./page/HomePage";
import Tickets from "./component/Tickets";

const routeer = createRoutesFromElements(
  <Route>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/tours" element={<Tours />} />
    <Route path="/tickets" element={<Tickets />} />
    <Route path="/payment" element={<Payment />} />
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
