import React, { useState, useEffect, useContext } from "react";
import "../Client/ClientInput/ClientInput.css";
import TextField from "@mui/material/TextField";
import { useFormik, Formik, Form } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import SearchableDropdown from "../../Components/Dropdown/SearchableDropdown";
import { gstScheme } from "../../Components/data/gstScheme";
import { state } from "../../Components/data/state";
import { useLocation } from "react-router-dom";
import { useOnMount } from "../../helpers/genral";
import { GlobalProvider } from "../../ContextAPI/GlobalProvider";

const initialValues = {
  companyName: "",
  companyPhoneNo: "",
  clientEmail: "",
  clientGstIn: "",
  clientPan: "",
  clientVat: "",
  clientWebsite: "",
  vendorCode: "",
  ContactBillAddress: "",
  ContactBillContry: "",
  ContactBillPincode: "",
  ContactBillCity: "",
};

const validate = (values) => {
  let errors = {};
  if (!values.companyName) {
    errors.companyName = true;
  }
  if (!values.companyPhoneNo) {
    errors.companyPhoneNo = "*";
  }

  return errors;
};

const validationSchema = Yup.object({
  companyName: Yup.string().required(true),
  companyPhoneNo: Yup.string().required(true),
});

function VenderInput() {
  const [check, setcheck] = useState(false);
  const [id, setid] = useState("");
  const location = useLocation();
  const [contactBillState, setContactBillState] = useState("");
  const [clientGstSchemes, setClientGstSchemes] = useState("");
  const { currentUser } = useContext(GlobalProvider);

  useEffect(() => {
    setid(location.state?.id);
    setcheck(location.state?.check);

    if (check) {
      getData();
    }
  }, [check]);

  // useOnMount(() => {
  //   if (check) {
  //     getData();
  //   }
  // });
  // console.log(id, check);
  function getData() {
    axios
      .post("http://143.244.140.179:5000/vendors/get", {
        user_id: currentUser,
        vendor_id: id,
      })
      .then((res) => {
        console.log(res.data[0]);
        formik.setFieldValue("companyName", res.data[0].company);
        formik.setFieldValue("companyPhoneNo", res.data[0].phone);
        formik.setFieldValue("clientEmail", res.data[0].email);
        setClientGstSchemes(res.data[0].gst_scheme);
        formik.setFieldValue("clientGstIn", res.data[0].gstin);
        formik.setFieldValue("clientPan", res.data[0].pan);
        formik.setFieldValue("clientVat", res.data[0].vat);
        formik.setFieldValue("clientWebsite", res.data[0].website);
        formik.setFieldValue("vendorCode", res.data[0].vendorcode);
        const contactInfo = res.data[0].contacts;
        if (contactInfo) {
          const contact = [JSON.parse(contactInfo)];
          // console.log(contact);
          contact.map((item, index) => {
            // console.log(item);
            setContactFields([...contactFields, item]);
          });
        }
        const address1 = res.data[0].address_address;
        if (address1) {
          const address = JSON.parse(address1);
          formik.setFieldValue("ContactBillAddress", address.billAdress);
          formik.setFieldValue("ContactBillContry", address.billCountry);
          setContactBillState(address.billState);
          formik.setFieldValue("ContactBillCity", address.billCity);
          formik.setFieldValue("ContactBillPincode", address.billPincode);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const formik = useFormik({
    initialValues,

    validationSchema,
  });

  async function onSubmitt() {
    const clientContactString = contactFields.map((item) =>
      JSON.stringify(item).replace(/\\/g, "")
    );
    const shippingBillingAddress = shipFields.map((item) =>
      JSON.stringify(item).replace(/\\/g, "")
    );
    const clientBillingAddress = JSON.stringify({
      billAdress: formik.values.ContactBillAddress,
      billCountry: formik.values.ContactBillContry,
      billCity: formik.values.ContactBillCity,
      billState: formik.values.ContactBillState,
      billPincode: formik.values.ContactBillPincode,
    }).replace(/\\/g, "");

    // console.log(
    //   "Shipping Filed :" + shippingBillingAddress,
    //   "contact :" + clientContactString
    // );

    axios
      .post("http://143.244.140.179:5000/vendors/new", {
        user_id: currentUser,
        vendor_id: "vendor" + formik.values.companyPhoneNo,
        company: formik.values.companyName,
        phone: formik.values.companyPhoneNo,
        email: formik.values.clientEmail,
        gst_scheme: clientGstSchemes,
        gstin: formik.values.clientGstIn,
        pan: formik.values.clientPan,
        vat: formik.values.clientVat,
        vendorcode: formik.values.vendorCode,
        website: formik.values.clientWebsite,
        contacts: clientContactString,
        address_address: clientBillingAddress,
        address_shipping: shippingBillingAddress,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [contactFields, setContactFields] = useState([
    {
      id: uuidv4(),
      personName: "",
      personPhone: "",
      personEmail: "",
    },
  ]);
  const handleChangeInput = (id, event) => {
    const newcontactFields = contactFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setContactFields(newcontactFields);
  };

  const handleAddFields = () => {
    setContactFields([
      ...contactFields,
      { id: uuidv4(), personName: "", personPhone: "", personEmail: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    if (contactFields.length != 1) {
      const values = [...contactFields];
      values.splice(
        values.findIndex((value) => value.id === id),
        1
      );
      setContactFields(values);
    }
  };

  const [shipFields, setShipFields] = useState([
    {
      id: uuidv4(),
      shipAddress: "",
      shipCountry: "",
      shipState: "",
      shipCity: "",
      shipPincode: "",
      shipCompanyname: "",
      shipGSTIN: "",
    },
  ]);
  const handleChangeInput2 = (id, event) => {
    const newshipFields = shipFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setShipFields(newshipFields);
  };

  const handleAddFields2 = () => {
    setShipFields([
      ...shipFields,
      {
        id: uuidv4(),
        shipAddress: "",
        shipCountry: "",
        shipState: "",
        shipCity: "",
        shipPincode: "",
        shipCompanyname: "",
        shipGSTIN: "",
      },
    ]);
  };

  const handleRemoveFields2 = (id) => {
    if (shipFields.length != 1) {
      const values = [...shipFields];
      values.splice(
        values.findIndex((value) => value.id === id),
        1
      );
      setShipFields(values);
    }
  };

  return (
    <div className="clientedit">
      <div className="itemsedit-name">New Vender</div>
      <hr />
      <div className="clientedit-1">
        <div className="clientedit-1-1">
          <div className="clientedit-1-1-0">
            <TextField
              className="clientedit-name-1"
              style={
                formik.touched.companyName && formik.errors.companyName
                  ? { borderBottom: "red solid" }
                  : {}
              }
              name="companyName"
              label="Company Name"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("companyName")}
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              // value={formik.values.companyName}
            />

            <TextField
              className="clientedit-name-1"
              label="Phone no"
              name="companyPhoneNo"
              variant="outlined"
              {...(check === true ? { disabled: true } : {})}
              size="small"
              style={
                formik.touched.companyPhoneNo && formik.errors.companyPhoneNo
                  ? { borderBottom: "red solid" }
                  : {}
              }
              {...formik.getFieldProps("companyPhoneNo")}
            />
            <TextField
              className="clientedit-name-1"
              name="clientEmail"
              label="Email"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("clientEmail")}
            />

            <SearchableDropdown
              className="clientedit-name-1"
              options={gstScheme}
              label="name"
              id="id"
              selectedVal={clientGstSchemes}
              handleChange={(val) => setClientGstSchemes(val)}
              placename={"Gst Treatment"}
              size="small"
            />

            <TextField
              className="clientedit-name-1"
              name="clientGstIn"
              label="GSTIN"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("clientGstIn")}
            />
            <TextField
              className="clientedit-name-1"
              name="clientPan"
              label="PAN"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("clientPan")}
            />
            <TextField
              className="clientedit-name-1"
              name="clientVat"
              label="VAT"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("clientVat")}
            />
            <TextField
              className="clientedit-name-1"
              name="clientWebsite"
              label="Website"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("clientWebsite")}
            />
            <TextField
              className="clientedit-name-1"
              name="vendorCode"
              label="Vendor Code"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("vendorCode")}
            />
          </div>

          {contactFields.map((inputField, index) => (
            <div className=" clientedit-1-1-1" key={inputField.id}>
              <TextField
                className="clientedit-name-1"
                name="personName"
                label="Contact Person"
                variant="outlined"
                size="small"
                value={inputField.personName}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                className="clientedit-name-1"
                name="personPhone"
                label="Contact Phone"
                variant="outlined"
                size="small"
                value={inputField.personPhone}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
              <TextField
                className="clientedit-name-1"
                name="personEmail"
                label="Contact Email"
                variant="outlined"
                size="small"
                value={inputField.personEmail}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />

              <div className="clientedit-1-1-1-buttons">
                <button
                  className="clientedit-1-1-1-button-remove"
                  style={{ marginRight: "20px" }}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  Remove
                </button>
                <button
                  className="clientedit-1-1-1-button-add"
                  onClick={handleAddFields}
                >
                  Add new Contact
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="clientedit-1-2">
          <div className="clientedit-1-2-name">Address</div>
          <hr />
          <div className="clientedit-1-2-1">
            <div className="clientedit-1-2-name1">Billing Address</div>
            <TextField
              className="clientedit-name-1"
              name="ContactBillAddress"
              label="Address"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("ContactBillAddress")}
            />
            <TextField
              className="clientedit-name-1"
              name="ContactBillContry"
              label="Country"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("ContactBillContry")}
            />
            {/* <TextField
              className="clientedit-name-1"
              name="ContactBillState"
              label="State"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("ContactBillState")}
            /> */}
            <SearchableDropdown
              className="clientedit-name-1"
              options={state}
              label="name"
              id="id"
              selectedVal={contactBillState}
              handleChange={(val) => setContactBillState(val)}
              placename={"Select State"}
            />
            <TextField
              className="clientedit-name-1"
              name="ContactBillCity"
              label="City"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("ContactBillCity")}
            />
            <TextField
              className="clientedit-name-1"
              name="ContactBillPincode"
              label="Pincode"
              variant="outlined"
              size="small"
              {...formik.getFieldProps("ContactBillPincode")}
            />
          </div>
          <div className="clientedit-1-2-1">
            <div className="clientedit-1-2-name1">Shipping Address</div>
            {shipFields.map((inputField) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
                key={inputField.id}
              >
                <TextField
                  className="clientedit-name-1"
                  name="shipAddress"
                  label="Address"
                  variant="outlined"
                  size="small"
                  value={inputField.shipAddress}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipCountry"
                  label="Country"
                  variant="outlined"
                  size="small"
                  value={inputField.shipCountry}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipState"
                  label="State"
                  variant="outlined"
                  size="small"
                  value={inputField.shipState}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipCity"
                  label="City"
                  variant="outlined"
                  size="small"
                  value={inputField.shipCity}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipPincode"
                  label="Pincode"
                  variant="outlined"
                  size="small"
                  value={inputField.shipPincode}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipCompanyname"
                  label="Company Name"
                  variant="outlined"
                  size="small"
                  value={inputField.shipCompanyname}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <TextField
                  className="clientedit-name-1"
                  name="shipGSTIN"
                  label="GSTIN"
                  variant="outlined"
                  size="small"
                  value={inputField.shipGSTIN}
                  onChange={(event) => handleChangeInput2(inputField.id, event)}
                />
                <div className="clientedit-1-1-1-buttons">
                  <button
                    className="clientedit-1-1-1-button-remove"
                    onClick={() => handleRemoveFields2(inputField.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="clientedit-1-1-1-button-add"
                    onClick={handleAddFields2}
                  >
                    Add new Contact
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="button-container">
        <div className="input-submit " onClick={onSubmitt}>
          Save
        </div>
        <div className="input-cancel " onClick={onSubmitt}>
          Cancel
        </div>
      </div>
    </div>
  );
}

export default VenderInput;
