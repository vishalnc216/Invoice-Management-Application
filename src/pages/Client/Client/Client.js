import React, { useContext, useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Topbar from "../../../Components/topbar/Topbar";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { GlobalProvider } from "../../../ContextAPI/GlobalProvider";

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
  function deleteItem(clientId) {
    axios
      .post("http://143.244.140.179:5000/clients/deleteClient", {
        user_id: currentUser,
        client_id: clientId,
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
      .post("http://143.244.140.179:5000/clients/getall", {
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
      <Topbar name="Client" />
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
                  <th className="th">Company</th>
                  <th className="th">Balance</th>
                  <th className="th">Email</th>
                  <th className="th">Phone</th>
                  {/* <th style={{ width: 8 }}> */}
                  {/* <Checkbox
                    checked={checked1}
                    onChange={handleChange2}
                    inputProps={{ "aria-label": "controlled" }}
                  /> */}
                  {/* </th> */}
                </tr>

                {data &&
                  data.map((item) => (
                    <tr className="tr" key={item}>
                      <td className="td-name">{item.company}</td>
                      <td className="td-price">{item.client_id}</td>
                      <td className="td-quantity">{item.email}</td>
                      <td className="td-quantity">{item.phone}</td>
                      <td className="td-check">
                        <MdDelete
                          onClick={() => deleteItem(item.client_id)}
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
                          state={{ id: item.client_id, check: true }}
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
