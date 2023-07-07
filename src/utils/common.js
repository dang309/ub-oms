const checkExpireJwtToken = (expireDate) => {
  if (Date.now() >= expireDate * 1000) {
    return false;
  }
  return true;
};

const getDirtyValues = (dirtyFields, allValues) => {
  const result = {};

  Object.keys(dirtyFields).forEach((key) => {
    result[key] = allValues[key];
  });

  return result;
};

export { checkExpireJwtToken, getDirtyValues };
