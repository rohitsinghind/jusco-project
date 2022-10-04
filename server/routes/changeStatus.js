const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();

async function changeStatus(applicantId, newStatus, token) {
  const usr = await db.user.findUnique({
    where: {
      token: token,
    },
  });

  if (!usr) {
    return { flag: false, message: "Bad Request" };
  } else if (usr.role == "hod" || usr.role == "depot_manager") {
    const application = await db.customer.update({
      where: {
        id: id,
      },
      data: {
        status: newStatus,
      },
    });

    return {
      flag: true,
      message: "Success",
    };
  } else {
    return {
      flag: false,
      message: "Access Denied",
    };
  }
}

module.exports = { changeStatus };
