const { pool } = require("../database");
const mysql = require("mysql");

async function createApplication(usrData) {
  const dateTime = new Date();
  console.log(usrData);
  const {
    salutation,
    Fname,
    Lname,
    mobile,
    email,
    designation,
    doctype1,
    doc1No,
    docFile1,
    doctype2,
    doc2No,
    docFile2,
    doctype3,
    doc3No,
    docFile3,
    nameBa,
    streetHouseNoBa,
    zoneBa,
    areaBa,
    localityBa,
    postalCodeBa,
    cityBa,
    regionBa,
    countryBa,
    namePa,
    streetHouseNoPa,
    postalCodePa,
    cityPa,
    regionPa,
    countryPa,
    zonePa,
    areaPa,
    localityPa,
    qty,
    remarks,
  } = usrData;

  let allData = [
    "customer",
    "id",
    "application_no",
    "customer_id",
    "status",
    "salutation",
    "first_name",
    "last_name",
    "mobile_no",
    "email_id",
    "designation",
    "document_type_1",
    "document_no_1",
    "document_file_name_1",
    "document_type_2",
    "document_no_2",
    "document_file_name_2",
    "document_type_3",
    "document_no_3",
    "document_file_name_3",
    "billing_estb_name",
    "billing_street",
    "billing_zone",
    "billing_area",
    "billing_locality",
    "billing_postal_code",
    "billing_city",
    "billing_region",
    "billing_country",
    "pickup_estb_name",
    "pickup_street",
    "pickup_zone",
    "pickup_area",
    "pickup_locality",
    "pickup_postal_code",
    "pickup_city",
    "pickup_region",
    "pickup_country",
    "daily_wastage",
    "remarks",
    "longitude",
    "latitude",

    Math.floor(Math.random() * 1000),
    `${Math.floor(Math.random() * 1000)}-${Fname}`,
    `${Fname}/${Math.floor(Math.random() * 1000)}/${dateTime.getFullYear()}`,
    0,
    salutation,
    Fname,
    Lname,
    mobile,
    email,
    designation,
    1213223,
    1,
    docFile1,
    232332,
    1,
    docFile2,
    1,
    322333,
    docFile3,
    nameBa,
    streetHouseNoBa,
    2,
    4,
    2,
    830103,
    1,
    regionBa,
    countryBa,
    namePa,
    streetHouseNoPa,
    1,
    2,
    1,
    postalCodePa,
    cityPa,
    regionPa,
    countryPa,
    40,
    remarks,
    "123.23.232",
    "213.23.2312",
  ];
  console.log("hua kuch");
  const insertQuery =
    "INSERT INTO ?? (??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  let query = mysql.format(insertQuery, allData);
  pool.query(query, (err, response) => {
    console.log(err);
    if (err) {
      return {
        status: "Failed",
        message: `No Application Created`,
      };
    } else {
      console.log(response);
      return {
        status: "success",
        message: `Application Created For User ${Fname}`,
        id: `${Fname}/${dateTime}/${email}`,
      };
    }
  });
}

module.exports = { createApplication };
