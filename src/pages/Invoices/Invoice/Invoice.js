import React from "react";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/topbar/Topbar";

function Items() {
  const [checked, setChecked] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked1(event.target.checked);
    setChecked(event.target.checked);
  };
  return (
    <div className="items-pre">
      <Topbar name="Invoice" />

      <div className="items">
        <div className="items-1">
          {checked ? (
            <button className="item-delete">Delete</button>
          ) : (
            <div></div>
          )}
          <Link to="input">
            <button className="item-new">New</button>
          </Link>
        </div>
        <div className="items-2">
          <div className="producttable">
            <table className="table">
              <tr className="tr">
                <th style={{ width: 8 }}>
                  <Checkbox
                    checked={checked1}
                    onChange={handleChange2}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </th>
                <th className="th">Client</th>
                <th className="th">Date</th>
                <th className="th">Status</th>
                <th className="th">Due</th>
                <th className="th">Amount</th>
                <th className="th">Balance</th>
              </tr>

              <tr className="tr">
                <td className="td-check">
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </td>
                <td className="td-price">Yash Yeole</td>
                <td className="td-name">12/1/2023</td>
                <td className="td-des">Unpaid</td>
                <td className="td-quantity">21/1/2023</td>
                <td className="td-quantity">20000</td>
                <td className="td-quantity">5000</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
