const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function applicationStatus({ id }) {
  console.log(id);
  const application = await db.customer.findUnique({
    where: {
      id: id,
    },
  });
  console.log(application);
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
