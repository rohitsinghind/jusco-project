const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function sendToHod(applicantId, token) {
  console.log(applicantId);
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == "depot_manager") {
    const application = await db.customer.update({
      where: {
        id: applicantId,
      },
      data: {
        status: "HOD",
      },
    });

    return {
      flag: true,
      message: `Success, Sent to hod`,
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { sendToHod };
