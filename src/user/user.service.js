const createUser = (payload) => {
  console.log(payload);
  return { message: 'User Created' };
};

module.exports = { createUser };
