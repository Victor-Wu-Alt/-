function clone(o) {
  const obj = {};
  for (let i in o) {
    // < !--hasOwnProperty忽略继承属性length toString等-- >
    if (o.hasOwnProperty(i)) {
      obj[i] = o[i]
    }
  }
  return obj
};
