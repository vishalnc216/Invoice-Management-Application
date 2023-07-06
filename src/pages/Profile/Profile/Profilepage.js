import React, { useState } from "react";
import "./Profilepage.css";
import axios from "axios";
import TextField from "@mui/material/TextField";
import SearchableDropdown from "../../../Components/Dropdown/SearchableDropdown";
import { currency } from "../../../Components/data/state";
import Switch from "@mui/material/Switch";
import { state } from "../../../Components/data/state";
import { useFormik, Formik, Form } from "formik";
import { taxtype } from "../../../Components/data/state";
import * as Yup from "yup";

const initialValues = {
  companyName: "",
  country: "",
  city: "",
  address: "",
  pinCode: "",
  email: "",
  website: "",
  phone: "",
  serviceTaxNo: "",
  contactName: "",
  bankName: "",
  accNo: "",
  branchName: "",
  ifscCode: "",
  adCode: "",
  swiftCode: "",
  tin: "TAN",
  tin1: "",
  pan: "",
  lst: "LST",
  lst1: "",
  cst: "CST",
  cst1: "",
  fssaiNo: "",
  vat: "",
  tan: "",
  dlNo: "",
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

const label = { inputProps: { "aria-label": "Switch demo" } };

function Profilepage() {
  const [name, setname] = useState("Yash Yeole");
  const [hide, setHide] = useState("none");
  const [btntext, setBtnText] = useState("Show");
  const [tbills, settbills] = useState("50");
  const [pbills, setpbills] = useState("50");
  const [tamountdeu, settamountdeu] = useState(50);
  const [plink, setplink] = useState("http://localhost:3000/");
  const [cname, setcame] = useState("YashYeole Enterprises");
  const [userid, setuserid] = useState("yashmyeole");
  const [bussid, setbussid] = useState("USBJK78GSD786SDG");
  const [gstno, setgstno] = useState("ASKFG876ASDFSDG6");
  const [mobno, setmobno] = useState("9930382389");
  const [email, setemail] = useState("yashyeole01@gmail.com");
  const [address, setaddress] = useState(
    "104,Nav Riddhi Siddhi Murbad Road Kalyan west"
  );
  function hideit() {
    if (btntext == "Show") {
      setHide("block");
      setBtnText("Hide");
    } else {
      setHide("none");
      setBtnText("Show");
    }
  }
  const formik = useFormik({
    initialValues,

    validationSchema,
  });

  const [cur, setCur] = useState("");
  const [stateName, setStateName] = useState("");
  const [taxType, setTaxType] = useState("");
  function onSubmit() {
    const mainAddress = JSON.stringify({
      address: formik.values.address,
      city: formik.values.city,
      country: formik.values.country,
      pinCode: formik.values.pinCode,
      state: stateName,
    }).replace(/\\/g, "");

    axios
      .post("https://swift-buttons-build.loca.lt/profile/set1", {
        user_id: "hello",
        name: formik.values.companyName,
        // address: mainAddress,
        email: formik.values.email,
        website: formik.values.website,
        mobile_no: formik.values.phone,
        serviceTaxNo: formik.values.serviceTaxNo,
        // currency: cur,
        gst_no: "",
        // taxationType: taxType,
        logo: "",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("1");
      });
    // axios
    //   .post("https://eighty-months-bet.loca.lt/profile/set2", {
    //     user_id: "aaa",
    //     name: formik.values.contactName,
    //     account: formik.values.accNo,
    //     branch: formik.values.branchName,
    //     ifsc: formik.values.ifscCode,
    //     adCode: formik.values.adCode,
    //     swiftCode: formik.values.swiftCode,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("2");
    //   });
    // axios
    //   .post("https://eighty-months-bet.loca.lt/profile/set3", {
    //     user_id: "aaa",
    //     tin1: formik.values.contactName,
    //     pan: formik.values.pan,
    //     vat: formik.values.vat,
    //     lst: formik.values.lst1,
    //     fssai: formik.values.fssaiNo,
    //     tan: formik.values.tan,
    //     dl: formik.values.dlNo,
    //     cst: formik.values.cst,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("3");
    //   });
  }
  // React.useEffect(() => {
  // axios
  //   .post("https://puny-kiwis-rush.loca.lt/profile/get1", {
  //     user_id: "hello",
  //   })
  //   .then(function (response) {
  //     console.log(response.data[0].email);
  //     formik.setFieldValue("companyName", response.data[0].name);
  //     const address1 = response.data[0].address;
  //     if (address1) {
  //       const address = JSON.parse(address1);
  //       formik.setFieldValue("address", address.address);
  //       formik.setFieldValue("city", address.city);
  //       formik.setFieldValue("country", address.country);
  //       formik.setFieldValue("pinCode", address.pinCode);
  //       setStateName(address.state);
  //     }
  //     formik.setFieldValue("email", response.data[0].email);
  //     formik.setFieldValue("website", response.data[0].website);
  //     formik.setFieldValue("serviceTaxNo", response.data[0].serviceTaxNo);
  //     formik.setFieldValue("phone", response.data[0].mobile_no);
  //     setTaxType(response.data[0].taxationType);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // axios
  //   .post("https://puny-kiwis-rush.loca.lt/profile/get2", {
  //     user_id: "hello",
  //   })
  //   .then(function (response) {
  //     console.log(response.data);
  //     formik.setFieldValue("contactName", response.data[0].name);
  //     formik.setFieldValue("accNo", response.data[0].account);
  //     formik.setFieldValue("branchName", response.data[0].branch);
  //     formik.setFieldValue("ifscCode", response.data[0].ifsc);
  //     formik.setFieldValue("adCode", response.data[0].adCode);
  //     formik.setFieldValue("swiftCode", response.data[0].swiftCode);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // axios
  //   .post("https://puny-kiwis-rush.loca.lt/profile/get3", {
  //     user_id: "hello",
  //   })
  //   .then(function (response) {
  //     console.log(response.data);
  //     formik.setFieldValue("tin1", response.data[0].tin);
  //     formik.setFieldValue("pan", response.data[0].pan);
  //     formik.setFieldValue("vat", response.data[0].vat);
  //     formik.setFieldValue("lst1", response.data[0].lst);
  //     formik.setFieldValue("cst1", response.data[0].cst);
  //     formik.setFieldValue("fssaiNo", response.data[0].fssai);
  //     formik.setFieldValue("tan", response.data[0].tan);
  //     formik.setFieldValue("dlNo", response.data[0].dl);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }, []);

  return (
    <div style={{ width: "100vw", overflowY: "scroll" }}>
      <div className="Profilepage">
        <h4>Profile</h4>
        <div className="logo">
          <span style={{ marginRight: "5vw" }}>Your logo</span>
          <input type="file" style={{ border: "none" }}></input>
        </div>
      </div>
      <hr style={{ color: "#e3e6ea" }} />
      <div className="profile_input">
        <TextField
          className="edit-name"
          label="Company name"
          name="companyName"
          {...formik.getFieldProps("companyName")}
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
        <div style={{ width: "35vw" }}>
          <SearchableDropdown
            options={currency}
            label="name"
            id="id"
            selectedVal={cur}
            handleChange={(val) => setCur(val)}
            placename={"Select Currency"}
            size="small"
          />
        </div>
      </div>
      <div className="profile_input">
        <TextField
          className="edit-name"
          name="country"
          {...formik.getFieldProps("country")}
          label="Country"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
        <div style={{ width: "35vw" }}>
          <SearchableDropdown
            options={state}
            label="name"
            id="id"
            selectedVal={stateName}
            handleChange={(val) => setStateName(val)}
            placename={"Select State"}
            size="small"
          />
        </div>
      </div>
      <div className="profile_input">
        <TextField
          className="edit-name"
          name="city"
          {...formik.getFieldProps("city")}
          label="City"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
        <TextField
          className="edit-description"
          name="address"
          {...formik.getFieldProps("address")}
          label="Address"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
      </div>
      <div className="profile_input">
        <TextField
          className="edit-name"
          name="pinCode"
          {...formik.getFieldProps("pinCode")}
          label="PIN code"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
        <TextField
          className="edit-description"
          name="email"
          {...formik.getFieldProps("email")}
          label="Email"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
      </div>
      <div className="profile_input">
        <TextField
          className="edit-name"
          name="website"
          {...formik.getFieldProps("website")}
          label="Website"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
        <TextField
          className="edit-description"
          name="phone"
          {...formik.getFieldProps("phone")}
          label="Phone"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
      </div>
      <div className="profile_input">
        <div style={{ width: "35vw" }}>
          <SearchableDropdown
            options={taxtype}
            label="name"
            id="id"
            selectedVal={taxType}
            handleChange={(val) => setTaxType(val)}
            placename={"Taxation Type"}
            size="small"
          />
        </div>
        <TextField
          className="edit-description"
          name="serviceTaxNo"
          {...formik.getFieldProps("serviceTaxNo")}
          label="Service Tax No"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />
      </div>
      <div className="profile_input">
        <TextField
          className="edit-name"
          name="contactName"
          {...formik.getFieldProps("contactName")}
          label="Contact Name"
          variant="outlined"
          size="small"
          style={{ width: "35vw" }}
        />

        <div style={{ width: "35vw" }}>
          <span style={{ fontWeight: "300" }}>Tax inclusive rates</span>
          <Switch {...label} defaultChecked />
        </div>
      </div>
      <div>
        <h4 style={{ marginLeft: "4vw", marginTop: "2.3vw" }}>Bank Details</h4>
        <div className="profile_input">
          <TextField
            className="edit-name"
            name="bankName"
            {...formik.getFieldProps("bankName")}
            label="Bank Name"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
          <TextField
            className="edit-description"
            name="accNo"
            {...formik.getFieldProps("accNo")}
            label="Account Number"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
        </div>
        <div className="profile_input">
          <TextField
            className="edit-name"
            name="barnchName"
            {...formik.getFieldProps("barnchName")}
            label="Branch Name"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
          <TextField
            className="edit-description"
            name="ifscCode"
            {...formik.getFieldProps("ifscCode")}
            label="IFSC Code"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
        </div>
        <div className="profile_input">
          <TextField
            className="edit-name"
            name="adCode"
            {...formik.getFieldProps("adCode")}
            label="AD Code"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
          <TextField
            className="edit-description"
            name="swiftCode"
            {...formik.getFieldProps("swiftCode")}
            label="SWIFT Code"
            variant="outlined"
            size="small"
            style={{ width: "35vw" }}
          />
        </div>
        <div
          className="input-cancel btn"
          onClick={() => hideit()}
          style={{
            marginLeft: "4vw",
            marginTop: "2.3vw",
            fontWeight: "300",
            width: "250px",
            padding: "10px",
          }}
        >
          {btntext} extra fields options
        </div>
        <div className="hidden" style={{ display: hide }}>
          <div className="profile_input ">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "2vw",
              }}
            >
              <TextField
                className="edit-name"
                name="tin"
                {...formik.getFieldProps("tin")}
                label="TIN"
                disabled
                variant="outlined"
                size="small"
                style={{ width: "10vw" }}
              />
              <TextField
                className="edit-description"
                name="tin1"
                {...formik.getFieldProps("tin1")}
                label=""
                variant="outlined"
                size="small"
                style={{ width: "23vw" }}
              />
            </div>
            <TextField
              className="edit-description"
              name="pan"
              {...formik.getFieldProps("pan")}
              label="PAN"
              variant="outlined"
              size="small"
              style={{ width: "35vw" }}
            />
          </div>
          <div className="profile_input">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "2vw",
              }}
            >
              <TextField
                className="edit-name"
                name="lst"
                {...formik.getFieldProps("lst")}
                label="LST"
                variant="outlined"
                size="small"
                style={{ width: "10vw" }}
              />
              <TextField
                className="edit-description"
                name="lst1"
                {...formik.getFieldProps("lst1")}
                label=""
                variant="outlined"
                size="small"
                style={{ width: "23vw" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "2vw",
              }}
            >
              <TextField
                className="edit-name"
                name="cst"
                {...formik.getFieldProps("cst")}
                label="CST"
                variant="outlined"
                size="small"
                style={{ width: "10vw" }}
              />
              <TextField
                className="edit-description"
                name="cst1"
                {...formik.getFieldProps("cst1")}
                label=""
                variant="outlined"
                size="small"
                style={{ width: "23vw" }}
              />
            </div>
          </div>
          <div className="profile_input">
            <TextField
              className="edit-name"
              name="fssaiNo"
              {...formik.getFieldProps("fssaiNo")}
              label="FSSAI No"
              variant="outlined"
              size="small"
              style={{ width: "35vw" }}
            />
            <TextField
              className="edit-description"
              name="tan"
              {...formik.getFieldProps("tan")}
              label="TAN"
              variant="outlined"
              size="small"
              style={{ width: "35vw" }}
            />
          </div>
          <div className="profile_input">
            <TextField
              className="edit-name"
              name="dlNo"
              {...formik.getFieldProps("dlNo")}
              label="D.L.No"
              variant="outlined"
              size="small"
              style={{ width: "35vw" }}
            />
            <TextField
              className="edit-name"
              name="vat"
              {...formik.getFieldProps("vat")}
              label="VAT"
              variant="outlined"
              size="small"
              style={{ width: "35vw" }}
            />
          </div>
        </div>
      </div>
      <div className="itemedit-button">
        <button onClick={onSubmit} className="itemedit-save">
          Save
        </button>
        <button className="itemedit-cancel">Cancel</button>
      </div>
    </div>
  );
}

export default Profilepage;
