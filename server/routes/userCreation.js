const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { createTokens } = require("../auth/jwtToken");

const db = new PrismaClient();

function createUser(usrDetails) {
  const dateTime = new Date();
  const { username, password, role, application_no, id, mod_by } = usrDetails;
  const token = createTokens(username);
  bcrypt.hash(password, 15).then(async (hashPass) => {
    try {
      db.user.create({
        data: {
          username: username || "Undefined",
          password: hashPass || "Undefined",
          role: role || "Undefined",
          application_no: application_no || "Undefined",
          id: id || "Undefined",
          entry_date: dateTime || "Undefined",
          mod_date: dateTime || "Undefined",
          mod_by: mod_by || "Undefined",
          token: token,
        },
      });

      return {
        status: "Success",
        message: `user Created ${username}`,
        token: token,
      };
    } catch (e) {
      return { status: "failed", message: "No User Created", error: e };
    }
  });
}

module.exports = { createUser };
