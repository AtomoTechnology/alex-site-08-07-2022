const bcrypt = require('bcryptjs');

exports.encrypt = (text) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(text, salt);
  return hash;
};

exports.comparePassword = (text, hash) => {
  return bcrypt.compareSync(text, hash);
};
