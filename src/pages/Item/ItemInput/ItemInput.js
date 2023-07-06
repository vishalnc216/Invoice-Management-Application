import React, { useState, useEffect, useContext } from "react";
import "./ItemInput.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { unit } from "../../../Components/data/state";
import SearchableDropdown from "../../../Components/Dropdown/SearchableDropdown";
import { GlobalProvider } from "../../../ContextAPI/GlobalProvider";
import { useLocation } from "react-router-dom";

const initialValues = {
  itemName: "",
  itemDescription: "",
  itemQuantity: 0,
  itemTax: "",
  itemHsn: "",
  itemSku: "",
  sales_unitprice: 0,
  sales_cess_per: 0,
  sales_cess: 0,
  purchase_unitprice: 0,
  purchase_cess_per: 0,
  purchase_cess: 0,
};

const validate = (values) => {
  // let errors = {};
  // if (!values.companyName) {
  //   errors.companyName = true;
  // }
  // if (!values.companyPhoneNo) {
  //   errors.companyPhoneNo = "*";
  // }
  // return errors;
};

const validationSchema = Yup.object({
  // companyName: Yup.string().required(true),
  // companyPhoneNo: Yup.string().required(true),
});

function Itemsedit() {
  const formik = useFormik({
    initialValues,

    validationSchema,
  });
  const [check, setcheck] = useState(false);
  const [id, setid] = useState("");
  const [itemUnit, setItemUnit] = useState("");
  const location = useLocation();
  const { currentUser } = useContext(GlobalProvider);

  useEffect(() => {
    if (location.state) {
      setcheck(location.state?.check);
      setid(location.state?.id);
      console.log(location.state?.id);
    }
  }, [location.state])

  useEffect(() => {

    if (check) {
      getData();
    }
  }, [check]);

  // useOnMount(() => {
  //   if (check) {
  //     getData();
  //   }
  // });

  function getData() {
    console.log(id);
    axios
      .post("http://143.244.140.179:5000/items/get", {
        user_id: currentUser,
        items_id: id,
      })
      .then((res) => {
        // console.log(res.data[0].sales_unitprice);
        formik.setFieldValue("itemName", res.data[0].name);
        formik.setFieldValue("itemDescription", res.data[0].description);
        formik.setFieldValue("itemQuantity", res.data[0].product_quantity);
        formik.setFieldValue("itemTax", res.data[0].tax);
        formik.setFieldValue("itemHsn", res.data[0].product_hsn);
        formik.setFieldValue("itemSku", res.data[0].sku);
        formik.setFieldValue("sales_unitprice", res.data[0].sales_unitprice);
        formik.setFieldValue("sales_cess", res.data[0].sales_cess);
        formik.setFieldValue("sales_cess_per", res.data[0].sales_cess_per);
        formik.setFieldValue(
          "purchase_unitprice",
          res.data[0].purchase_unitprice
        );
        formik.setFieldValue(
          "purchase_cess_per",
          res.data[0].purchase_cess_per
        );
        formik.setFieldValue("purchase_cess", res.data[0].purchase_cess);
        setItemUnit(res.data[0].unit);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function onSubmitt(id) {
    console.log(check, id);
    let date = "";
    if (check) {
      date = id;
    } else {
      date = Date.now();
    }
    console.log(date);
    axios
      .post("http://143.244.140.179:5000/items/new", {
        user_id: currentUser,
        items_id: date,
        name: formik.values.itemName,
        description: formik.values.itemDescription,
        product_quantity: formik.values.itemQuantity, //
        unit: itemUnit,
        tax: formik.values.itemTax,
        product_hsn: formik.values.itemHsn,
        service_sac: "null",
        sku: formik.values.itemSku,
        sales_unitprice: formik.values.sales_unitprice, //
        sales_cess_per: formik.values.sales_cess_per, //
        sales_cess: formik.values.sales_cess, //
        purchase_unitprice: formik.values.purchase_unitprice, //
        purchase_cess_per: formik.values.purchase_cess_per, //
        purchase_cess: formik.values.purchase_cess, //
        currency: 1,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const handleChange = (event) => {
  //   setUnit(event.target.value);
  // };
  return (
    <div className="itemsedit">
      <div className="itemsedit-name">New Item</div>
      <hr />
      <div className="itemedit-1">
        <TextField
          className="edit-name"
          name="itemName"
          label="Item name"
          variant="outlined"
          size="small"
          {...formik.getFieldProps("itemName")}
        />
        <TextField
          className="edit-description"
          name="itemDescription"
          label="Description"
          variant="outlined"
          size="small"
          {...formik.getFieldProps("itemDescription")}
        />
      </div>
      <div className="itemedit-2">
        <TextField
          className="edit-quan"
          name="itemQuantity"
          type="number"
          label="Quantity"
          variant="outlined"
          size="small"
          {...formik.getFieldProps("itemQuantity")}
        />
        <SearchableDropdown
          className="edit-unit"
          options={unit}
          label="name"
          id="id"
          selectedVal={itemUnit}
          handleChange={(val) => setItemUnit(val)}
          placename={"Unit"}
          size="small"
        />
        <TextField
          className="edit-quan"
          name="itemTax"
          {...formik.getFieldProps("itemTax")}
          label="Tax"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="edit-hsn-main">
        <TextField
          className="edit-hsn"
          {...formik.getFieldProps("itemHsn")}
          name="itemHsn"
          label="HSN"
          variant="outlined"
          size="small"
        />
        <TextField
          className="edit-hsn"
          {...formik.getFieldProps("itemSku")}
          name="itemSku"
          label="SKU"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="iteminput-3">
        <div className="iteminput-3-sales">
          <div className="iteminput-3-name">Sales info</div>
          <hr />
          <div className="iteminput-3-sales-1">
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("sales_unitprice")}
              name="sales_unitprice"
              label="Unit Price"
              type="number"
              variant="outlined"
              size="small"
            />
            <TextField
              className="edit-sales-3"
              // {...formik.getFieldProps("itemCurrencyS")}
              // name="itemCurrencyS"
              value={"IND"}
              label="Currency"
              disabled
              variant="outlined"
              size="small"
            />
          </div>
          <div className="iteminput-3-sales-1">
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("sales_cess_per")}
              name="sales_cess_per"
              label="CESS%"
              type="number"
              variant="outlined"
              size="small"
            />
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("sales_cess")}
              name="sales_cess"
              label="CESS"
              type="number"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="iteminput-3-sales">
          <div className="iteminput-3-name">Purchase info</div>
          <hr />
          <div className="iteminput-3-sales-1">
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("purchase_unitprice")}
              name="purchase_unitprice"
              label="Unit Price"
              variant="outlined"
              type="number"
              size="small"
            />
            <TextField
              className="edit-sales-3"
              // {...formik.getFieldProps("itemCurrencyP")}
              // name="itemCurrencyP"
              value={"IND"}
              label="Currency"
              disabled
              variant="outlined"
              size="small"
            />
          </div>
          <div className="iteminput-3-sales-1">
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("purchase_cess_per")}
              name="purchase_cess_per"
              label="CESS%"
              variant="outlined"
              type="number"
              size="small"
            />
            <TextField
              className="edit-sales-3"
              {...formik.getFieldProps("purchase_cess")}
              name="purchase_cess"
              label="CESS"
              type="number"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
      </div>

      <div className="itemedit-button">
        <button onClick={() => onSubmitt(id)} className="itemedit-save">
          Save
        </button>
        <button className="itemedit-cancel">Cancel</button>
      </div>
    </div>
  );
}

export default Itemsedit;
