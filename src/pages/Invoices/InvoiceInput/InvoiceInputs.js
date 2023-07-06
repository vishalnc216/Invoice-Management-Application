import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./InvoiceInputs.css";
import { v4 as uuidv4 } from "uuid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../../../ContextAPI/DataLayer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import SearchableDropdown from "../../../Components/Dropdown/SearchableDropdown";
import { state, tax } from "../../../Components/data/state";
import { paymentDropdown } from "../../../Components/data/paymentTerms";
// import { tax } from "../../../Components/data/tax";

const initialValues = {
  invoiceNo: "",
  invoiceDate: "",
  invoiceDueDate: "",
  PoNo: "",
  PoDate: "",
  itemSku: "",
  itemItemPriceS: "",
  itemCurrencyS: "",
  itemCessS: "",
  itemItemPriceP: "",
  itemCurrencyP: "",
  itemCessP: "",
};

const BillInputs = () => {
  const [gendate, setgendate] = useState("");

  const formik = useFormik({
    initialValues,

    // validationSchema,
  });
  function onSubmitt() {
    console.log(formik.values);
  }

  // useEffect(() => {
  //   if (new Date().getMonth().toString().length == 1) {
  //     setgendate(
  //       (
  //         new Date().getFullYear() +
  //         "-" +
  //         "0" +
  //         (new Date().getMonth() + 1) +
  //         "-" +
  //         new Date().getDate()
  //       ).toString()
  //     );
  //   } else {
  //     setgendate(
  //       (
  //         new Date().getFullYear() +
  //         "-" +
  //         (new Date().getMonth() + 1) +
  //         "-" +
  //         new Date().getDate()
  //       ).toString()
  //     );
  //   }
  // }, []);
  // const [{ Receiptno }, dispatch] = useDataLayerValue();
  // const navigate = useNavigate();

  const [clientName, setclientName] = useState("");
  // const [clientId, setclientId] = useState("");

  const [shippingC, setShippingC] = useState(false);
  const [discountC, setDiscountC] = useState(false);
  const [shippingAmo, setShippingAmo] = useState();
  const [discountAmo, setDiscountAmo] = useState();
  // const [startDate, setStartDate] = useState(new Date());

  const [paymentTerms, setPaymentTerms] = useState("");

  const shippingCheckBox = (event) => {
    setShippingC(event.target.checked);
  };
  const discountCheckBox = (event) => {
    setDiscountC(event.target.checked);
  };
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      proName: "",
      proQuantity: "",
      unitPrice: "",
      discount: "",
      tax: "",
    },
  ]);
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { id: uuidv4(), proName: "", proQuantity: "", unitPrice: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    if (inputFields.length != 1) {
      const values = [...inputFields];
      values.splice(
        values.findIndex((value) => value.id === id),
        1
      );
      setInputFields(values);
    }
  };

  const addBill = async () => {
    var i;
    var totalPrice = 0;
    console.log(inputFields);
    var data = [];
    for (i = 0; i < inputFields.length; i++) {
      totalPrice +=
        Number(inputFields[i].proQuantity) * Number(inputFields[i].unitPrice);
      data.push(inputFields[i].proName);
      data.push(inputFields[i].proQuantity);
      data.push(inputFields[i].unitPrice);
    }
    await axios;
    // .post("https://billbackend.herokuapp.com/bill/postbill/", {
    //   business_id: "erfgdfgb",
    //   cus_name: CustomerName,
    //   cus_mob: CustomerMob,
    //   dataa: data,
    //   gst_amount: "500",
    //   total_amount: totalPrice,
    //   // statuss: checked.toString(),
    //   receipt_no: "125467",
    //   cus_email: CustomerEmail,
    //   discount: Discount,
    //   gen_date: gendate,
    //   paid_date: PaidDate,
    // })
    // .then((res) => console.log(res.data))
    // .catch((err) => console.log(err));

    // const values = [CustomerName,CustomerEmail,CustomerMob,Discount,inputFields,totalPrice]
    console.log(data);
    // dispatch({
    //   type: "SET_Receiptno",
    //   Receiptno: {
    //     business_id: "erfgdfgb",
    //     cus_name: CustomerName,
    //     cus_mob: CustomerMob,
    //     dataa: data,
    //     gst_amount: "500",
    //     total_amount: totalPrice,
    //     // statuss: checked.toString(),
    //     receipt_no: "125467",
    //     cus_email: CustomerEmail,
    //     discount: Discount,
    //     gen_date: gendate,
    //     paid_date: PaidDate,
    //   },
    // });
  };
  return (
    <div className="invoiceinput">
      <div className="itemsedit-name">Add New Invoice</div>
      <hr />
      <div className="invoiceinput-1">
        {/* <TextField
          className="input"
          
          label="Client name"
          variant="outlined"
          size="small"
          {...formik.getFieldProps("itemName")}
        /> */}
        <SearchableDropdown
          className="clientedit-name-1"
          options={state}
          label="name"
          id="id"
          selectedVal={clientName}
          handleChange={(val) => setclientName(val)}
          placename={"Client name"}
        />
      </div>
      <div className="invoiceinput-2">
        <div className="itemedit-2">
          <TextField
            className="edit-quan"
            {...formik.getFieldProps("invoiceNo")}
            name="invoiceNo"
            label="Invoice No"
            variant="outlined"
            size="small"
          />
          <TextField
            className="edit-unit"
            {...formik.getFieldProps("invoiceDate")}
            name="invoiceDate"
            label="Invoice Date"
            variant="outlined"
            size="small"
          />
          {/* <div style={{ width: "100%" }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ width: "30%", height: "45px" }}
            />
          </div> */}
          <TextField
            className="edit-quan"
            {...formik.getFieldProps("invoiceDueDate")}
            name="invoiceDueDate"
            label="Due Date"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="itemedit-2">
          <TextField
            className="edit-quan"
            name="PoNo"
            {...formik.getFieldProps("PoNo")}
            label="PO no"
            variant="outlined"
            size="small"
          />
          <TextField
            className="edit-unit"
            name="PoDate"
            {...formik.getFieldProps("PoDate")}
            label="PO date"
            variant="outlined"
            size="small"
          />
          <div style={{ width: "30%" }}>
            <SearchableDropdown
              className="edit-unit"
              options={paymentDropdown}
              label="name"
              id="id"
              selectedVal={paymentTerms}
              handleChange={(val) => setPaymentTerms(val)}
              placename={"Payment Terms"}
            />
          </div>
        </div>
        <div className="invoiceinput-2-2">
          <div className="invoiceinput-item">Select Items</div>
          <hr />
          {inputFields.map((inputField) => (
            <div className="products" key={inputField.id}>
              <TextField
                className="product-input"
                name="proName"
                label="Product Name"
                variant="outlined"
                size="small"
                value={inputField.proName}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                className="product-input"
                name="proQuantity"
                label="Quantity"
                variant="outlined"
                size="small"
                value={inputField.proQuantity}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                className="product-input"
                name="unitPrice"
                label="Unit price"
                variant="outlined"
                size="small"
                value={inputField.unitPrice}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                className="product-input"
                name="discount"
                label="Discount"
                variant="outlined"
                size="small"
                value={inputField.discount}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              {/* <TextField
                className="product-input"
                name="tax"
                label="Tax"
                variant="outlined"
                size="small"
                value={inputField.tax}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              /> */}
              <SearchableDropdown
                className="product-input"
                options={tax}
                label="name"
                id="id"
                selectedVal={inputField.tax}
                // onChange={(event) => handleChangeInput(inputField.id, event)}
                placename={"Tax"}
              />
              <div className="product-icons">
                <DeleteOutlineIcon
                  style={{ marginRight: "20px" }}
                  onClick={() => handleRemoveFields(inputField.id)}
                />
                <AddCircleOutlineIcon onClick={handleAddFields} />
              </div>
            </div>
          ))}
        </div>
        <hr style={{ margin: "30px 0 0" }} />
        <div className="invoiceinput-2-3">
          <div className="invoiceinput-2-3-1">
            <div className="invoice-2-3-1-checkbox">
              <div className="checkbox">
                <Checkbox
                  checked={shippingC}
                  onChange={shippingCheckBox}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <div className="invoice-checkbox-name">
                  Add Shipping Charges
                </div>
              </div>
              {shippingC ? (
                <TextField
                  className="invoice-checkbox-input"
                  value={shippingAmo}
                  onChange={(e) => {
                    setShippingAmo(e.target.value);
                  }}
                  label="Add Shipping Charges"
                  variant="outlined"
                  size="small"
                />
              ) : (
                <div></div>
              )}
            </div>
            <div className="invoice-2-3-1-checkbox">
              <div className="checkbox">
                <Checkbox
                  checked={discountC}
                  onChange={discountCheckBox}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <div className="invoice-checkbox-name">Add Discount to all</div>
              </div>
              {discountC ? (
                <TextField
                  className="invoice-checkbox-input"
                  value={discountAmo}
                  onChange={(e) => {
                    setDiscountAmo(e.target.value);
                  }}
                  label="Add Shipping Charges"
                  variant="outlined"
                  size="small"
                />
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="invoiceinput-2-3-2">
            <div className="invoiceinput-totals">
              <div className="invoice-totals-name">Subtotal:</div>
              <div className="invoice-totals-price">200</div>
            </div>
            {shippingC ? (
              <div className="invoiceinput-totals">
                <div className="invoice-totals-name">Shipping:</div>
                <div className="invoice-totals-price">{shippingAmo}</div>
              </div>
            ) : (
              <div style={{ display: "none" }} className="invoiceinput-totals">
                <div className="invoice-totals-name">Shipping:</div>
                <div className="invoice-totals-price">100</div>
              </div>
            )}
            {discountC ? (
              <div className="invoiceinput-totals">
                <div className="invoice-totals-name">Discount:</div>
                <div className="invoice-totals-price">{discountAmo}</div>
              </div>
            ) : (
              <div style={{ display: "none" }} className="invoiceinput-totals">
                <div className="invoice-totals-name">Discount:</div>
                <div className="invoice-totals-price">100</div>
              </div>
            )}

            <hr />
            <div className="invoiceinput-final-totals">
              <div className="invoice-final-totals-name">Total:</div>
              <div className="invoice-final-totals-name">100</div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="input-submit" onClick={addBill}>
          Save
        </div>
        <div className="input-cancel ">Cancel</div>
      </div>
    </div>
  );
};

export default BillInputs;
