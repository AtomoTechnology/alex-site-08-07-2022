const Role = require('./models/role');
const User = require('./models/user');

Role.hasMany(User);
User.belongsTo(Role);

// Role.hasMany(User, { as: "userRole", foreignKey: "roleId" });
// User.belongsTo(Role, { as: "roleUser", foreignKey: "roleId" });


