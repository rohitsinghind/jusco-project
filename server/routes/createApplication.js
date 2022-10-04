const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

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
  try{
    const as = await db.customer.create({
      data: {
        id: `${Fname}/${dateTime}/${email}` || "undefined",
        application_no: `200/${Fname[(0, 3)]}/${mobile[(0, 3)]}` || "undefined",
        customer_id: `${Fname}/${dateTime}/${email}` || "undefined",
        status: "undefined",
        salutation: salutation || "undefined",
        first_name: Fname || "undefined",
        last_name: Lname || "undefined",
        mobile_no: mobile || "undefined",
        email_id: email || "undefined",
        designation: designation || "undefined",
        document_type_1: doctype1 || "undefined",
        document_no_1: doc1No || "undefined",
        document_file_name_1: docFile1 || "undefined",
        document_type_2: doctype2 || "undefined",
        document_no_2: doc2No || "undefined",
        document_file_name_2: docFile2 || "undefined",
        document_type_3: doctype3 || "undefined",
        document_no_3: doc3No || "undefined",
        document_file_name_3: docFile3 || "undefined",
        billing_estb_name: nameBa || "undefined",
        billing_street: streetHouseNoBa || "undefined",
        billing_zone: zoneBa || "undefined",
        billing_area: areaBa || "undefined",
        billing_locality: localityBa || "undefined",
        billing_postal_code: postalCodeBa || "undefined",
        billing_city: cityBa || "undefined",
        billing_region: regionBa || "undefined",
        billing_country: countryBa || "undefined",
        pickup_estb_name: namePa || "undefined",
        pickup_street: streetHouseNoPa || "undefined",
        pickup_zone: zonePa || "undefined",
        pickup_area: areaPa || "undefined",
        pickup_locality: localityPa || "undefined",
        pickup_postal_code: postalCodePa || "undefined",
        pickup_city: cityPa || "undefined",
        pickup_region: regionPa || "undefined",
        pickup_country: countryPa || "undefined",
        daily_wastage: qty || "undefined",
        remarks: remarks || "undefined",
        auth: "undefined",
        application_status: "started",
      },
    });
    return {
      status: "success",
      message: `Application Created For User ${Fname}`,
      id: `${Fname}/${dateTime}/${email}`,
    };}
    catch(e){
      return {
        status: "Failed",
        message: `No Application Created`,
      }
    }
  
}

module.exports = { createApplication };
