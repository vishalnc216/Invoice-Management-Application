import React, { useState, useEffect } from "react";
import "./Business.css";
import axios from "axios";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { useNavigate } from "react-router-dom";

function ShowAllBills() {
  const [allBills, setAllBills] = useState([]);
  const [{ Receiptno }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();

  const sendbill = (bill) => {
    dispatch({
      type: "SET_Receiptno",
      Receiptno: bill,
    });
    navigate("/Outputbill");
    console.log(bill);
  };
  useEffect(() => {
    axios
      .post(`https://billbackend.herokuapp.com/bill/getallbills/`, {
        business_id: "erfgdfgb",
      })
      .then((res) => {
        setAllBills(res.data);
        console.log(res.data);
      });
  }, []);
  return (
    <div style={{ margin: "40px" }}>
      <h3>All Bills</h3>
      {allBills?.map((bill, index) => (
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
  );
}

export default ShowAllBills;
