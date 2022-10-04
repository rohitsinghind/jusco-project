const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function getAllApplication(token) {
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == "hod" || usr.role == "depot_manager") {
    const applicants = await db.customer.findMany();
    return {
      flag: true,
      message: "Success",
      data: applicants,
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { getAllApplication };
