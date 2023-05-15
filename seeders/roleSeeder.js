const { faker } = require("@faker-js/faker");
const { Role } = require("../models");

module.exports = async () => {
  const roles = [];
  let rolcode;
  let rolname;
  for (let i = 1; i < 5; i++) {
    rolcode = i * 100;
    if (rolcode <= 100) {
      rolname = "Reader";
    } else if (rolcode >= 200 && rolcode < 300) {
      rolname = "Writer";
    } else if (rolcode >= 300 && rolcode < 400) {
      rolname = "Editor";
    } else if (rolcode >= 400) {
      rolname = "Admin";
    }
    roles.push({
      rolcode: rolcode,
      rolname: rolname,
    });
  }

  await Role.bulkCreate(roles);
  console.log("[Database] Se corrió el seeder de Roles.");
};
