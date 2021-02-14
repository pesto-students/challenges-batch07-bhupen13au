function removeFalsyValues(array) {
  const retrunArray = array.filter(Boolean);
  return retrunArray;
}

export {
  removeFalsyValues,
};
