const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UsersRepository = require('../repositories/UsersRepository');
const { secret, tokens } = require('../constants/jwt.config');

const ReturnAuthUsers = () => UsersRepository.getAllUsers();
const createAccessToken = (payload) => {
  const data = {
    email: payload,
    type: tokens.access.type,
  };
  const options = { expiresIn: tokens.access.expiresIn };

  return jwt.sign(data, secret, options);
};

const createRefreshToken = () => {
  const data = {
    type: tokens.refresh.type,
  };
  const options = { expiresIn: tokens.refresh.expiresIn };

  return jwt.sign(data, secret, options);
};

const getTokens = (payload) => {
  const access = createAccessToken(payload);
  const refresh = createRefreshToken();
  const data = {
    access,
    refresh,
  };
  return data;
};


const CreateUser = async (email, password) => {
  const salt = 10;
  const finded = await UsersRepository.FindUser(email);
  if (finded) {
    return 'user already exist!';
  }
  const hash = await bcrypt.hash(password, salt);
  return UsersRepository.AddUser(email, hash);
};

const UserLogin = async (email, password) => {
  const user = await UsersRepository.FindUser(email);
  if (!user) {
    return 'User does not exist!';
  }
  const isValid = bcrypt.compareSync(password, user.passwordHash);
  if (!isValid) {
    return 'Invalid user pass';
  }
  return getTokens(email);
};

module.exports = {
  ReturnAuthUsers,
  CreateUser,
  UserLogin,
};
