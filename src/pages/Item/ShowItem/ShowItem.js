import React, { useState, useEffect, useContext } from "react";
import "./ShowItem.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/topbar/Topbar";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { useOnMount } from "../../../helpers/genral";
import { GlobalProvider } from "../../../ContextAPI/GlobalProvider";
import { FiEdit } from "react-icons/fi";

function Items() {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [data, setdata] = useState([]);
  const { currentUser } = useContext(GlobalProvider);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked1(event.target.checked);
    setChecked(event.target.checked);
  };

  function deleteItem(itemId) {
    axios
      .post("http://143.244.140.179:5000/items/deleteItem", {
        user_id: currentUser,
        items_id: itemId,
      })
      .then((res) => {
        console.log(res.data + "Itttt");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (currentUser.trim() === "") {
      return;
    }
    // console.log(currentUser);
    axios
      .post("http://143.244.140.179:5000/items/getall", {
        user_id: currentUser,
      })
      .then((res) => {
        setdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);

  return (
    <div className="items-pre">
      <Topbar name="Items" />
      <div className="items">
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
                  <th className="th">Name</th>
                  <th className="th">Description</th>
                  <th className="th">Price</th>
                  <th className="th">Quantity</th>
                  <th style={{ width: 8 }}>
                    {/* <Checkbox
                    checked={checked1}
                    onChange={handleChange2}
                    inputProps={{ "aria-label": "controlled" }}
                  /> */}
                  </th>
                </tr>
                {data &&
                  data.map((item) => (
                    <tr className="tr" key={item.items_id}>
                      <td className="td-name">{item.name}</td>
                      <td className="td-des">{item.description}</td>
                      <td className="td-quantity">{item.product_quantity}</td>
                      <td className="td-price">{item.sales_unitprice}</td>
                      <td className="td-check">
                        {/* <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    /> */}
                        <MdDelete
                          onClick={() => deleteItem(item.items_id)}
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
                          state={{ id: item.items_id, check: true }}
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
      </div>
    </div>
  );
}

export default Items;
