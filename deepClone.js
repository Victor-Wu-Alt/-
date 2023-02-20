function deepCopy(obje) {
  if (typeof obje === 'object') {
    let afterClone = Array.isArray(obje) ? [] : {};
    for (let item in obje) {
      if (obje.hasOwnProperty(item)) {
        afterClone[item] = deepCopy(obje[item]);
      }
    }
    return afterClone;
  } else {
    return obje;
  }
}
