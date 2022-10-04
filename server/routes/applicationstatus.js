const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

function applicationStatus(id) {
  const application = db.customer.findUnique({
    where: {
      id: id,
    },
  });

  if (!id) {
    return { flag: false, message: "no application exists" };
  } else {
    return {
      flag: true,
      message: "Success",
      data: application,
    };
  }
}

module.exports = { applicationStatus };
