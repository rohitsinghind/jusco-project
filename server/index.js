const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { urlencoded } = require("body-parser");

const app = express();
const db = new PrismaClient();

app.use(express.json());
app.use(cors({ "access-control-allow-origin": "*" }));
app.use(urlencoded({ encodeURI: true }));

app.post("/registerUser", async (req, res) => {
  console.log("/RegisterUser");

  const {
    salutation,
    areaPa,
    undefined,
    doctype1,
    doc1No,
    doc2No,
    doc3No,
    Fname,
    Lname,
    mobile,
    email,
    cmobile,
    cemail,
    designation,
    gstin,
    password,
    nameBa,
    streetHouseNoBa,
    regionBa,
    postalCodeBa,
    cityBa,
    countryBa,
    zoneBa,
    localityBa,
    areaBa,
    qty,
    remarks,
  } = req.body;
  console.log(req.body);

  let data = await db.customer.create({
    data: {
      id: `${Fname}/${mobile}/${Lname}`,
      application_no: `${mobile}${Fname}`,
      customer_id: `${Lname}ID${mobile}++`,
      status: "201",
      salutation: salutation || "Mr",
      first_name: Fname,
      last_name: Lname,
      mobile_no: mobile,
      email_id: email,
      designation: designation || "Owner",
      document_type_1: "Aadhar",
      document_no_1: "1231 4323 3343 0093",
      document_file_name_1: "n%$jasdhjhasdhls.ksi",
      document_type_2: "",
      document_no_2: "",
      document_file_name_2: "",
      document_type_3: "",
      document_no_3: "",
      document_file_name_3: "",
      billing_estb_name: `${Fname} ${Lname}`,
      billing_street: streetHouseNoBa || "Not Defined",
      billing_zone: zoneBa || "Not Defined",
      billing_area: areaBa || "Not Defined",
      billing_locality: localityBa || "Not Defined",
      billing_postal_code: postalCodeBa || "Not Defined",
      billing_city: cityBa || "Not Defined",
      billing_region: regionBa || "Not Defined",
      billing_country: countryBa || "India",
      pickup_estb_name: `${Fname} ${Lname}`,
      pickup_street: streetHouseNoBa || "Not Defined",
      pickup_zone: zoneBa || "Not defined",
      pickup_area: areaPa || "Not defined",
      pickup_locality: localityBa || "Not defined",
      pickup_postal_code: postalCodeBa || "Not Defined",
      pickup_city: cityBa || "Not Defined",
      pickup_region: regionBa || "Not Defined",
      pickup_country: countryBa || "India",
      daily_wastage: qty || "Not Defined",
    },
  });
  res.send(`Application Added For ${Fname}`);
  // res.json(req.body);
});

app.listen(3001, () => {
  console.log("localhost:3001");
});
