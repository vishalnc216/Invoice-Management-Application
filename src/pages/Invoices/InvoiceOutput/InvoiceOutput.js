import React, { useEffect, useState } from "react";
import logo from "../../../images/Kshitij.png";
import "./InvoiceOutput.css";
import { useDataLayerValue } from "../../../ContextAPI/DataLayer";
import axios from "axios";
import { Details } from "@mui/icons-material";
import Button from "@mui/material/Button";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PictureAsPdfRoundedIcon from "@mui/icons-material/PictureAsPdfRounded";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
function InvoiceOutput() {
  const [{ Receiptno }] = useDataLayerValue();

  let [items, setitems] = useState([]);
  let [info, setinfo] = useState();
  useEffect(() => {
    async function getinfo() {
      await axios
        .post("https://billbackend.herokuapp.com/auth/getdetails", {
          business_id: "12345abc",
        })
        .then((res) => setinfo((info = res.data[0])))
        .catch((err) => console.log(err));
      console.log(info);
    }
    getinfo();
  }, []);
  useEffect(() => {
    if (Receiptno.dataa) {
      var products = [];
      var i;
      var temp = [];
      for (i = 0; i < Receiptno.dataa.length; i++) {
        temp.push(Receiptno.dataa[i]);
        temp.push(Receiptno.dataa[i + 1]);
        temp.push(Receiptno.dataa[i + 2]);
        i = i + 2;
        products.push(temp);
        temp = [];
      }
      setitems((items = products));
      console.log(items);
    }
  }, [Receiptno]);
  function print() {
    window.print();
  }
  return (
    <div className="invoice-output">
      <div className="invoice-options">
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "rgb(90 76 165)" }}
          startIcon={<EditRoundedIcon />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#e4eaec", color: "#808a92" }}
          startIcon={<PictureAsPdfRoundedIcon />}
        >
          PDF
        </Button>
        <Button
          variant="contained"
          size="small"
          style={{ backgroundColor: "#e4eaec", color: "#808a92" }}
          startIcon={<PrintRoundedIcon />}
        >
          Print
        </Button>
      </div>

      <hr style={{ color: "#808a92" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          justifyContent: "center",
        }}
      >
        <div className="invoice-display">
          <div className="d1">
            <div className="d1-1">
              <img height={80} width={80} className="im" src={logo} />
              <div className="d1-1-text">
                <div
                  className="c-name"
                  style={{ fontWeight: "bold", marginBottom: "0.5vw" }}
                >
                  TechDevlo
                </div>
                <div className="c-address">Kalyan-Dombivali, MH (27), IN</div>
                <div className="c-phoneno">+919082630253</div>
                <div className="c-email">vnc216@gmail.com</div>
                <div style={{ fontWeight: "bold" }}>GSTIN: </div>
                <span className="c-gst">932366481612345</span>
                <div style={{ fontWeight: "bold" }}>Contact Name: </div>
                <span className="c-contact-name">Vishal Chaudhari</span>
              </div>
            </div>
            <div>
              <div className="d1-2">
                <div style={{}}>BILL OF SUPPLY</div>
                <div>
                  <div>Original for recipient</div>
                  <div>01-100</div>
                </div>
              </div>
              <table className="due-table">
                <tr
                  style={{
                    textAlign: "left",
                    marginBottom: "1vw",
                    color: "white",
                    backgroundColor: "rgb(90, 76, 165)",
                    fontSize: "15px",
                  }}
                >
                  <th style={{ padding: "0.4vw" }}>Amount Due:</th>
                  <th style={{ textAlign: "right" }}>₹394.00</th>
                </tr>
                <tr>
                  <td id="td">Issue Date:</td>
                  <td id="td">14 - Jun - 2023</td>
                </tr>
                <tr>
                  <td id="td">Due Date:</td>
                  <td id="td">14 - Jun - 2023</td>
                </tr>
                <tr>
                  <td id="td">PO Number:</td>
                  <td id="td">14 - Jun - 2023</td>
                </tr>
                <tr>
                  <td id="td">PO Date:</td>
                  <td id="td">14 - Jun - 2023</td>
                </tr>
                <tr>
                  <td id="td">Place of Supply:</td>
                  <td id="td">14 - Jun - 2023</td>
                </tr>
              </table>
            </div>
          </div>
          <br />
          <div className="d2">
            <div className="d2-1">
              <div style={{ fontWeight: "bold" }}>Bill To</div>
              <div className="reciever-name">Vishal Chaudhari</div>
              <div className="reciever-address">
                Mahavir Nagri, D ving, rn:302,nr Tulsi tower,gandhar nagar,
                khadakpada,Kalyan West pc:421301, Kalyan-Dombivali, MH (27)
                421301, IN vnc216@gmail.com 9082630253
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>GSTIN:</span>
                18AABCU9603R1ZM
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>PAN:</span>CYVPC8061L
              </div>
            </div>
            <div className="d2-2">
              <div className="d2-2-1">
                <div style={{ fontWeight: "bold" }}>Ship To</div>
                <span>
                  Vishal Chaudhari +919082630253
                  <br />
                  Mahavir Nagri, D ving, rn:302,nr Tulsi tower,gandhar nagar,
                  khadakpada,Kalyan West pc:421301, Kalyan-Dombivali, MH (27)
                  421301, IN
                </span>
              </div>
              <br></br>
              <div className="d2-2-2">
                <span>
                  <strong>&nbsp;E-Way Bill no.</strong>&nbsp;12343
                </span>
                <span>
                  <strong>&nbsp;Vehicle No.</strong>&nbsp;65656
                </span>
                <span>
                  <strong>&nbsp;LR. No.</strong>&nbsp;5667
                </span>
                <span>
                  <strong>&nbsp;Ship by</strong>&nbsp;Road
                </span>
                <span>
                  <strong>&nbsp;Shipping Distance (KM)</strong>&nbsp;787
                </span>
                <span>
                  <strong>&nbsp;Challan No.</strong>&nbsp;435435
                </span>
                <span>
                  <strong>&nbsp;Transporter Name</strong>&nbsp;vnc{" "}
                </span>
                <span>
                  <strong>&nbsp;Transporter ID</strong>&nbsp;76869868vnc
                </span>
                <span>
                  <strong>&nbsp;Transporter GSTIN</strong>&nbsp;123456789012
                </span>
                <span>
                  <strong>&nbsp;Transporter Doc Date</strong>&nbsp;09 - Jun -
                  2023
                </span>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="d3">
            <table className="d3-table">
              <thead
                className="thead"
                style={{ fontSize: "15px", textAlign: "right" }}
              >
                <tr>
                  <th className="th">S.No</th>
                  <th className="th" style={{ textAlign: "left" }}>
                    Item Description
                  </th>
                  <th className="th">HSN/SAC</th>
                  <th className="th">Qty UoM</th>
                  <th className="th">Price(₹)</th>
                  <th className="th">Discount(₹)</th>
                  <th className="th">Amount(₹)</th>
                </tr>
              </thead>
              <tbody className="tbody" style={{ textAlign: "right" }}>
                <tr className="line-item-row line-item-row-body">
                  <td
                    id="td"
                    style={{ textAlign: "center" }}
                    className="line-item-row__index"
                  >
                    1
                  </td>
                  <td
                    id="td"
                    style={{ textAlign: "left" }}
                    className="line-item-row__name"
                  >
                    <h4>BANANA</h4>
                    <p></p>
                    <p style={{ fontSize: "10px" }}>JHJJVHVJHVHVHVHV</p>
                    <p></p>
                  </td>
                  <td id="td" className="line-item-row__code">
                    5678
                  </td>
                  <td id="td" className="line-item-row__qty">
                    1 <span className="uom">BDL</span>
                  </td>
                  <td id="td" className="line-item-row__price">
                    100.00
                  </td>
                  <td id="td" className="line-item-row__discount">
                    2.00
                    <span className="percentage">2%</span>
                  </td>
                  <td id="td" className="line-item-row__amount">
                    98.00
                  </td>
                </tr>
                <tr className="line-item-row line-item-row-body">
                  <td
                    id="td"
                    style={{ textAlign: "center" }}
                    className="line-item-row__index"
                  >
                    1
                  </td>
                  <td
                    id="td"
                    style={{ textAlign: "left" }}
                    className="line-item-row__name"
                  >
                    <h4>BANANA</h4>
                    <p></p>
                    <p style={{ fontSize: "10px" }}>JHJJVHVJHVHVHVHV</p>
                    <p></p>
                  </td>
                  <td id="td" className="line-item-row__code">
                    5678
                  </td>
                  <td id="td" className="line-item-row__qty">
                    1 <span className="uom">BDL</span>
                  </td>
                  <td id="td" className="line-item-row__price">
                    100.00
                  </td>
                  <td id="td" className="line-item-row__discount">
                    2.00
                    <span className="percentage">2%</span>
                  </td>
                  <td id="td" className="line-item-row__amount">
                    98.00
                  </td>
                </tr>
                <tr className="line-item-row line-item-row-body">
                  <td
                    id="td"
                    style={{ textAlign: "center" }}
                    className="line-item-row__index"
                  >
                    1
                  </td>
                  <td
                    id="td"
                    style={{ textAlign: "left" }}
                    className="line-item-row__name"
                  >
                    <h4>BANANA</h4>
                    <p></p>
                    <p style={{ fontSize: "10px" }}>JHJJVHVJHVHVHVHV</p>
                    <p></p>
                  </td>
                  <td id="td" className="line-item-row__code">
                    5678
                  </td>
                  <td id="td" className="line-item-row__qty">
                    1 <span className="uom">BDL</span>
                  </td>
                  <td id="td" className="line-item-row__price">
                    100.00
                  </td>
                  <td id="td" className="line-item-row__discount">
                    2.00
                    <span className="percentage">2%</span>
                  </td>
                  <td id="td" className="line-item-row__amount">
                    98.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />
          <div className="d4">
            <table className="d4-table">
              <tr>
                <td id="td">Discount</td>
                <td id="td">(-) ₹6.00</td>
              </tr>
              <tr>
                <td id="td">Total Taxable Value</td>
                <td id="td">₹394.00</td>
              </tr>
              <tr>
                <td id="td">Shipping & Packaging charges</td>
                <td id="td">(-) ₹6.00</td>
              </tr>
              <tr>
                <td id="td">GSTtds (12.0%)</td>
                <td id="td">(-) ₹47.28</td>
              </tr>
              <tr>
                <td id="td">Rounded Off</td>
                <td id="td">₹0.28</td>
              </tr>
              <tr>
                <td id="td">Total Value (in figure)</td>
                <td id="td">₹347</td>
              </tr>
              <tr>
                <td id="td">Total Value (in words)</td>
                <td id="td">₹ Three Hundred Forty-seven Only</td>
              </tr>
            </table>
          </div>
          <br />
          <hr />
          <br />
          <div className="d5">
            <h4>Terms & Conditions</h4>
            <div>
              hhbhbhbhbhbhbhbhgtvtyuugthhbhbhbhbhbhbhbhgtvtyuugthhbhbhbhbhbhbhbhgtvtyuugthhb
            </div>
          </div>
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default InvoiceOutput;
