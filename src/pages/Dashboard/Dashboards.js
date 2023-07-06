import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Client from "../../images/customer.png";
import Money from "../../images/money.png";
import Item from "../../images/items.png";
import Invoice from "../../images/invoice.png";
import { Line } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import Topbar from "../../Components/topbar/Topbar";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function Dashboards() {
  const data = {
    labels: [
      "1 june",
      "3 june",
      "4 june",
      "5 june",
      "6 june",
      "7 june",
      "8 june",
      "9 june",
      "10 june",
      "11 june",
      "12 june",
      "13 june",
      "14 june",
      "15 june",
    ],
    datasets: [
      {
        label: "sdvbjkkldfldf",
        data: [3, 6, 2, 4, 10, 20],
        borderColor: "red",
        fill: true,
        pointBorderColor: "aqua",
        backgroundColor: "aqua",
      },
    ],
  };
  const options = {
    plugins: {
      legend: true,
    },
    elements: {
      line: {
        tension: 0.5,
      },
    },
    resizeTo: {
      width: "100px",
    },
    responsive: true,
  };
  const [clientCount, setclientCount] = useState("");
  const [invoiceCount, setinvoiceCount] = useState("");
  const [itemCount, setitemCount] = useState("");
  const [moneyCount, setmoneyCount] = useState("");
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");

    axios
      .post("http://143.244.140.179:5000/clients/count", {
        user_id: user_id,
      })
      .then((res) => {
        setclientCount(res.data[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://143.244.140.179:5000/items/count", {
        user_id: user_id,
      })
      .then((res) => {
        setitemCount(res.data[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://143.244.140.179:5000/invoices/count", {
        user_id: user_id,
      })
      .then((res) => {
        setinvoiceCount(res.data[0].count);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post("http://143.244.140.179:5000/invoices/amount", {
        user_id: user_id,
      })
      .then((res) => {
        setmoneyCount(res.data.sum);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dashboard-pre">
      <Topbar name="Dashboard" />
      <div className="dashboard">
        <div className="dashboard-main">
          <div className="dashboard-main-1">
            <img className="dashboard-main-1-img" src={Client} />
            <span className="dashboard-main-1-amm">{clientCount}</span>
            <span className="dashboard-main-1-name">Total Clients</span>
          </div>
          <div className="dashboard-main-2">
            <img className="dashboard-main-1-img" src={Item} />
            <span className="dashboard-main-1-amm">{itemCount}</span>
            <span className="dashboard-main-1-name">Total Items</span>
          </div>
          <div className="dashboard-main-3">
            <img className="dashboard-main-1-img" src={Invoice} />
            <span className="dashboard-main-1-amm">{invoiceCount}</span>
            <span className="dashboard-main-1-name">Total Invoices</span>
          </div>
          <div className="dashboard-main-4">
            <img className="dashboard-main-1-img" src={Money} />
            <span className="dashboard-main-1-amm">{moneyCount}</span>
            <span className="dashboard-main-1-name">Money you earn</span>
          </div>
        </div>
        <div className="dashboard-graph">
          <div className="dashboard-graph-text">
            <span className="dashboard-graph-text1">Revenue</span>
            <span className="dashboard-graph-text2">Last 7 days</span>
          </div>
          {/* <div className="dashboard-graph-1"> */}
          {/* <Line options={options} data={data} /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
