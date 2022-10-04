const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function applicationStatus(data) {
  const {id} = data;
  console.log(id);
  const application = await db.customer.findUnique({
    where: {
      id: id,
    },
  });

  if (!application) {
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
