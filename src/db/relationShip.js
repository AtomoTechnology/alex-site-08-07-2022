const Role = require('./models/role');
const User = require('./models/user');

const profile = require('./models/profile');
const workplace = require('./models/workplace');
const knowlage = require('./models/KnowledgeUser');

Role.hasMany(User);
User.belongsTo(Role);

User.hasMany(profile);
profile.belongsTo(User);

profile.hasMany(workplace);
workplace.belongsTo(profile);

profile.hasMany(knowlage);
knowlage.belongsTo(profile);