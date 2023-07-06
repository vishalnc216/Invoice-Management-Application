import React, { useState, useEffect } from "react";
import "./Homepage.css";
import img from "../images/homepage.svg";
// import Countup from "react-countup";
import headimg from "../images/Kshitij.png";

function Homepage() {
  const [no, setno] = useState(0);
  //   useEffect(() => {
  //     counter();
  //   }, []);

  //   const counter = () => {
  //     const target = 3000;
  //     const speed = 100;
  //     const inc = target / speed;
  //     if (no < target) {
  //       setno(no + inc);
  //       setTimeout(counter, 100);
  //       console.log(no);
  //       counter();
  //     }
  //     // counter();
  //   };

  return (
    <div className="homepage">
      <div className="homepage-main">
        <div className="homepage-content">
          <span className="main-head">Invoice Make your Business Quickly</span>
          <span className="main-info">
            myBillBook GST billing software helps businesses create professional
            invoices in just a few clicks. Not just invoicing, the billing
            software is also capable of managing the business inventory.
          </span>
          <div className="main-login-sign">
            <button className="main-signup">Signup</button>
            <button className="main-login">Login</button>
          </div>
        </div>
        <div className="homepage-img-cont">
          <img className="homepage-img" src={img}></img>
        </div>
      </div>

      {/* Rating */}

      <div className="homepage-Rating">
        <div className="rating-bussno">
          <div className="rating-bussno-no">{no}</div>
          <span className="rating-bussno-name">No. Of Business</span>
        </div>
        <div className="rating-invoice">
          <div className="rating-invoice-no">2cr+</div>
          <span className="rating-invoice-name">No. Of Invoice</span>
        </div>
        <div className="rating-city">
          <div className="rating-city-no">2000+</div>
          <span className="rating-city-name">Cities And Town </span>
        </div>
        <div className="rating-rating">
          <div className="rating-rating-no">4.5★</div>
          <span className="rating-rating-name">Rating</span>
        </div>
      </div>

      {/* Usecase */}

      <div className="homepage-usecase">
        <div className="usecase-content">
          <span className="usecase-content-head">
            All invoicing related documents
          </span>
          <span className="usecase-content-content">
            Get our Billing Software and take advantage of our documents and
            features specially designed for Indian businesses.
          </span>
        </div>
        <div className="usecase-part">
          <div className="usecase-part-1">
            <img
              style={{ width: "100px", marginBottom: "15px" }}
              src={headimg}
            ></img>
            <span className="usecase-part-1-head">
              As a proof something goes wrong
            </span>
            <span className="usecase-part-1-content">
              as a proof something goes wrong myBillBook GST billing software
              helps businesses create professional invoices in just a few
              clicks. as a proof something goes wrong myBillBook GST billing
              software helps businesses create professional invoices in just a
              few clicks.
            </span>
          </div>
          <div className="usecase-part-1">
            <img
              style={{ width: "100px", marginBottom: "15px" }}
              src={headimg}
            ></img>
            <span className="usecase-part-1-head">
              As a proof something goes wrong
            </span>
            <span className="usecase-part-1-content">
              as a proof something goes wrong myBillBook GST billing software
              helps businesses create professional invoices in just a few
              clicks. as a proof something goes wrong myBillBook GST billing
              software helps businesses create professional invoices in just a
              few clicks.
            </span>
          </div>
          <div className="usecase-part-1">
            <img
              style={{ width: "100px", marginBottom: "15px" }}
              src={headimg}
            ></img>
            <span className="usecase-part-1-head">
              As a proof something goes wrong
            </span>
            <span className="usecase-part-1-content">
              as a proof something goes wrong myBillBook GST billing software
              helps businesses create professional invoices in just a few
              clicks. as a proof something goes wrong myBillBook GST billing
              software helps businesses create professional invoices in just a
              few clicks.
            </span>
          </div>
          <div className="usecase-part-1">
            <img
              style={{ width: "100px", marginBottom: "15px" }}
              src={headimg}
            ></img>
            <span className="usecase-part-1-head">
              As a proof something goes wrong
            </span>
            <span className="usecase-part-1-content">
              as a proof something goes wrong myBillBook GST billing software
              helps businesses create professional invoices in just a few
              clicks. as a proof something goes wrong myBillBook GST billing
              software helps businesses create professional invoices in just a
              few clicks.
            </span>
          </div>
        </div>
      </div>

      {/* Info */}

      <div className="homepage-info">
        <div className="info-header">As a proof something goes wrong</div>
        <div className="info-image-content">
          <div className="info-image">
            <img style={{ width: "30vw" }} src={img} />
          </div>
          <div className="info-content">
            <h2>Invoice Make your Business Quickly</h2>
            <ul>
              <li>As a proof something goes wrong</li>
              <li>
                As a proof something goes wrongAs a proof something goes wrong
              </li>
            </ul>
            <h2>Invoice Make your Business Quickly</h2>
            <ul>
              <li>
                Aas a proof something goes wrong myBillBook GST billing software
                helps businesses create professional invoices in just a few
                clicks. as a proof something goes wrong myBillBook GST billing
                software helps businesses create professional invoices in just a
                few clicks.
              </li>
              <li>
                As a proof something goes wrong As a proof something goes wrong
                As a proof something goes wrong
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* question */}

      <div className="homepage-question">
        <div className="question-head">
          FAQs on Accounting & GST Billing Software
        </div>
        <div className="question-main">
          <div className="question-1">
            <span className="question-1-ques">
              What is billing and invoicing software?
            </span>
            <p className="question-1-ans">
              A billing and invoicing software helps businesses streamline &
              automate their day-to-day billing and accounting operations.
              myBillBook is best billing software in India designed to aid small
              & medium business owners run their operations from anywhere &
              anytime. Business owners can create customised GST invoices &
              non-GST invoices within seconds and share them on WhatsApp with
              their clients. In addition, one can monitor unpaid invoices and
              send payment reminders from the free gst billing software
            </p>
          </div>
          <div className="question-1">
            <span className="question-1-ques">
              What is billing and invoicing software?
            </span>
            <p className="question-1-ans">
              A billing and invoicing software helps businesses streamline &
              automate their day-to-day billing and accounting operations.
              myBillBook is best billing software in India designed to aid small
              & medium business owners run their operations from anywhere &
              anytime. Business owners can create customised GST invoices &
              non-GST invoices within seconds and share them on WhatsApp with
              their clients. In addition, one can monitor unpaid invoices and
              send payment reminders from the free gst billing software
            </p>
          </div>
          <div className="question-1">
            <span className="question-1-ques">
              What is billing and invoicing software?
            </span>
            <p className="question-1-ans">
              A billing and invoicing software helps businesses streamline &
              automate their day-to-day billing and accounting operations.
              myBillBook is best billing software in India designed to aid small
              & medium business owners run their operations from anywhere &
              anytime. Business owners can create customised GST invoices &
              non-GST invoices within seconds and share them on WhatsApp with
              their clients. In addition, one can monitor unpaid invoices and
              send payment reminders from the free gst billing software
            </p>
          </div>
        </div>
      </div>

      {/* footer */}

      <div className="homepage-footer">hello</div>
    </div>
  );
}

export default Homepage;
