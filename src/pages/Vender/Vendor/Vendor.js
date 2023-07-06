import React, { useContext, useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/topbar/Topbar";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GlobalProvider } from "../../../ContextAPI/GlobalProvider";
import "./Vendor.css"

function Items() {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [data, setdata] = useState([]);

  const { currentUser } = useContext(GlobalProvider);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked1(event.target.checked);
    setChecked(event.target.checked);
  };
  function deleteItem(vendorId) {
    axios
      .post("http://143.244.140.179:5000/vendors/deleteVendor", {
        user_id: currentUser,
        vendor_id: vendorId,
      })
      .then((res) => {
        // setdata(res.data);
        console.log(res.data + "Itttt");
        // setcurrentUser((currentUser = currentUser));
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    axios
      .post("http://143.244.140.179:5000/vendors/getall", {
        user_id: currentUser,
      })
      .then((res) => {
        setdata(res.data.clients);
        console.log(res.data.clients);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);
  return (
    <div className="items-pre">
      <Topbar name="Vendor" />
      {/* <div className="items">
        <div className="items-1">
          {checked ? (
            <button className="item-delete">Delete</button>
          ) : (
            <div></div>
          )}
          <Link to={"input"} state={{ check: false }}>
            <button className="item-new">New</button>
          </Link>
        </div>
        <div className="items-2">
          <div className="producttable">
            <table className="table">
              <tbody>
                <tr className="tr">
                  <th className="th">Company</th>
                  <th className="th">Person Name</th>

                  <th className="th">Email</th>
                  <th className="th">Phone</th>
                </tr>
                {data &&
                  data.map((item) => (
                    <tr className="tr" key={item.vendor_id}>
                      <td className="td-name">{item.company}</td>
                      <td style={{ width: "20%" }} className="td-des">
                        {JSON.parse(item.contacts[0]).personName}
                      </td>

                      <td className="td-quantity">{item.email}</td>
                      <td className="td-quantity">{item.phone}</td>
                      <td
                        style={{ width: 8, cursor: "pointer" }}
                        className="td-check"
                      >
                        <MdDelete
                          onClick={() => deleteItem(item.vendor_id)}
                          size={"22px"}
                          color="rgb(209,26,42)"
                        />
                      </td>
                      <td
                        style={{ width: 8, cursor: "pointer" }}
                        className="td-check"
                      >
                        <Link
                          to={"input"}
                          state={{ id: item.vendor_id, check: true }}
                        >
                          <FiEdit size={"20px"} color="rgb(2,26,423)" />
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}

      <div className="table-main-0">
        <div className="table-main-1">
          <div className="table-main-3">
            <div className="table-main-4">
              <div className="table-main-5">

                <div className="table-header">
                  <div>
                    <h2 className="table-header-name">
                      Users
                    </h2>
                    <p className="table-header-name-2">
                      Add users, edit and more.
                    </p>
                  </div>

                  <div>
                    <div className="table-header-2">
                      <a className="table-header-2-btn-1" href="#">
                        View all
                      </a>

                      <a className="table-header-2-btn-2" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        Add user
                      </a>
                    </div>
                  </div>
                </div>

                <table className="table-container">
                  <thead className="table-sub-head">
                    <tr>
                      <th scope="col" className="table-sub-head-check">
                        <label for="hs-at-with-checkboxes-main" className="table-sub-head-check-1">
                          <input type="checkbox" className="table-sub-head-check-2" id={"hs-at-with-checkboxes-main"} />

                        </label>
                      </th>

                      <th scope="col" className="table-sub-head-name">
                        <div className="table-sub-head-name-1">
                          <span className="table-sub-head-name-2">
                            Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="table-sub-head-name">
                        <div className="table-sub-head-name-1">
                          <span className="table-sub-head-name-2">
                            Position
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="table-sub-head-name">
                        <div className="table-sub-head-name-1">
                          <span className="table-sub-head-name-2">
                            Status
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="table-sub-head-name">
                        <div className="table-sub-head-name-1">
                          <span className="table-sub-head-name-2">
                            Portfolio
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="table-sub-head-name">
                        <div className="table-sub-head-name-1">
                          <span className="table-sub-head-name-2">
                            Created
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="table-sub-head-name"></th>
                      <th scope="col" className="table-sub-head-name"></th>
                    </tr>
                  </thead>

                  <tbody className="table-content-body">

                    <tr>
                      <td className="table-content-body-check">
                        <div className="table-content-body-check-1">
                          <label for="hs-at-with-checkboxes-1" style={{ display: "flex" }} >
                            <input type="checkbox" className="table-content-body-check-2" id="hs-at-with-checkboxes-1" />
                          </label>
                        </div>
                      </td>
                      <td className="table-content-body-name">
                        <div className="table-content-body-name-1">

                          <span className="table-content-body-name-2">Christina Bersh</span>

                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-content-body-check">
                        <div className="table-content-body-check-1">
                          <label for="hs-at-with-checkboxes-1" style={{ display: "flex" }} >
                            <input type="checkbox" className="table-content-body-check-2" id="hs-at-with-checkboxes-1" />
                          </label>
                        </div>
                      </td>
                      <td className="table-content-body-name">
                        <div className="table-content-body-name-1">

                          <span className="table-content-body-name-2">Christina Bersh</span>

                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-content-body-check">
                        <div className="table-content-body-check-1">
                          <label for="hs-at-with-checkboxes-1" style={{ display: "flex" }} >
                            <input type="checkbox" className="table-content-body-check-2" id="hs-at-with-checkboxes-1" />
                          </label>
                        </div>
                      </td>
                      <td className="table-content-body-name">
                        <div className="table-content-body-name-1">

                          <span className="table-content-body-name-2">Christina Bersh</span>

                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                      <td style={{ width: "18rem" }} className="table-content-body-name">
                        <div className="table-content-body-name-1">
                          <span className="table-content-body-name-2">Director</span>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>



                <div className="table-bottom">
                  <div>
                    <p className="table-bottom-1">
                      <span className="table-bottom-2">6</span> results
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Items;
