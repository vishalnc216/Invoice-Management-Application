import React, { useState, useEffect } from "react";
import BillInputs from "./Invoices/InvoiceInput/InvoiceInputs";
import profile from "../images/profile.gif";
import billicon from "../images/billicon.png";
import "./Business.css";
import axios from "../axios.js";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { useNavigate } from "react-router-dom";

function Business(props) {
  const [Bills, setBills] = useState([]);
  let [money, setMoney] = useState("");
  const navigate = useNavigate();
  const [{ Receiptno }, dispatch] = useDataLayerValue();
  const sendbill = (bill) => {
    dispatch({
      type: "SET_Receiptno",
      Receiptno: bill,
    });
    navigate("/Outputbill");
    console.log(bill);
  };

  // useEffect(() => {
  //   axios
  //     .post(`/bill/getbills/`, {
  //       business_id: "erfgdfgb",
  //     })
  //     .then((res) => {
  //       setBills(res.data);
  //       console.log(res.data);
  //     });
  //   axios
  //     .post(`/bill/gettodaysbills/`, {
  //       business_id: "erfgdfgb",
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setMoney(res.data);
  //     });
  // }, []);
  return (
    <div className="business">
      <div className="business-main-1">
        <div className="main-1-profile" onClick={() => navigate("/profile")}>
          <img style={{ width: "100px", marginBottom: "20px" }} src={profile} />
          <span style={{ fontSize: "18px", fontWeight: "900" }}>
            Business Profile
          </span>
        </div>
        <div onClick={() => navigate("/billInputs")} className="main-1-create">
          <img
            style={{ width: "100px", marginBottom: "20px" }}
            src={billicon}
          />
          <span style={{ fontSize: "18px", fontWeight: "900" }}>
            Create Bill
          </span>
        </div>
        <div className="main-1-amount">
          <span className="main-1-amount-no">{money.sum}</span>
          <span
            style={{ fontSize: "18px", fontWeight: "900" }}
            className="main-1-amount-name"
          >
            Amount(Day)
          </span>
        </div>
      </div>
      <div className="business-main-2">
        <div className="main-2-name">
          <span className="main-2-name-top">Top 5 Bills</span>
        </div>

        {Bills?.map((bill, index) => (
          <div className="main-2-cart-bill">
            <span className="cart-bill-sr">{index + 1}</span>
            <span className="cart-bill-name">{bill.cus_name}</span>
            <span className="cart-bill-amount"> {bill.total_amount + "₹"}</span>

            <span onClick={() => sendbill(bill)} className="cart-bill-bill">
              View Bill
            </span>
          </div>
        ))}
      </div>
      <div className="show-bill">
        <button
          onClick={() => navigate("/showallbills")}
          className="main-2-name-show"
        >
          show all bill
        </button>
      </div>
    </div>
  );
}

export default Business;
