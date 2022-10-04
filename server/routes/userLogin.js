const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const db = new PrismaClient();

async function loginUser(data) {
  const { username, password } = data;
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user) {
    return { flag: false, message: "no user exists" };
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        return { flag: false, message: "wrong password" };
      } else if (match) {
        return {
          flag: true,
          message: "Logged In",
          token: user.token,
          data: user,
        };
      }
    });
  }
}

module.exports = { loginUser };
