import React from "react";
import Home from "./pages/Home";
import InvoiceInput from "./pages/Invoices/InvoiceInput/InvoiceInputs";
import Navbar from "./Components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Business from "./pages/Business";
import Navbarbusiness from "./pages/Navbarbusiness";
import InvoiceOutput from "./pages/Invoices/InvoiceOutput/InvoiceOutput";
import Signup from "./pages/Authentication/Signup/Signup";
import Login from "./pages/Authentication/Login/Login";
import ShowAllBills from "./pages/ShowAllBills";
import Sidebar from "./Components/Sidebar/Sidebar";
import ShowItem from "./pages/Item/ShowItem/ShowItem";
import ItemInput from "./pages/Item/ItemInput/ItemInput";
import ClientInput from "./pages/Client/ClientInput/ClientInput";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import VenderInput from "./pages/Vender/VenderInput";
import Profilepage from "./pages/Profile/Profile/Profilepage";
import Invoice from "./pages/Invoices/Invoice/Invoice";
import Client from "./pages/Client/Client/Client";
import Vendor from "./pages/Vender/Vendor/Vendor";
import Dashboards from "./pages/Dashboard/Dashboards";

function Body() {
  return (
    <div>
      {/* <Items /> */}
      {/* <Itemsedit /> */}
      {/* <BillInputs /> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
      <div style={{ display: "flex" }}>
        
      
      <Router>

        <div className="body-sidebar">
          <Sidebar />
        </div>
          
        <Routes>
          {/* <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route> */}
          <Route exact path="/business" element={<Business />}></Route>
          <Route exact path="/showallbills" element={<ShowAllBills />}></Route>

          {/* invoice */}

          <Route exact path="/invoice" element={<Invoice />}>
            {" "}
          </Route>
          <Route
            exact
            path="/invoice/output"
            element={<InvoiceOutput />}
          ></Route>
          <Route exact path="/invoice/input" element={<InvoiceInput />}></Route>

          {/* item */}

          <Route exact path="/item" element={<ShowItem />}></Route>
          <Route exact path="/item/input" element={<ItemInput />}></Route>

          {/* client */}

          <Route exact path="/client" element={<Client />}></Route>
          <Route exact path="/client/input" element={<ClientInput />}></Route>

          <Route exact path="/vendor" element={<Vendor />}></Route>
          <Route exact path="/vendor/input" element={<VenderInput />}></Route>
          <Route exact path="/profile" element={<Profilepage />}></Route>
          <Route exact path="/dashboard" element={<Dashboards />}></Route>
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default Body;
