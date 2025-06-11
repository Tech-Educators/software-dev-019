import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CompanyInfo from "./components/CompanyInfo";
import { Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import UserOrders from "./pages/UserOrders";

//Routes will be the parent of all our Route components

export default function App() {
  return (
    <>
      <h1>My App</h1>
      <Header />
      <Routes>
        <Route path={"/*"} element={<NotFound />} />
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/about"}
          element={
            <>
              <About />
              <CompanyInfo phone={12345} companyName={"Manny's biscuits"} />
            </>
          }
        />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/profile/:username"} element={<UserProfile />}>
          {/* our nested route is a relative path, so we don't add / */}
          <Route path={"orders"} element={<UserOrders />} />
        </Route>
      </Routes>
    </>
  );
}

// /profile/:username
// /profile/:username/orders
