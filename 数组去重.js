const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const setData = Array.from(new Set(arr));
console.log(setData);

//双重循环去重
const handleRemoveRepeat1 = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
        len--;
      }
    }
  }
  return arr;
};

//去重
const handleRemoveRepeat2 = (arr) => {
  let repeatArr = [];
  for (let i = 0, len = arr.length; i < len; i++)
    if (repeatArr.indexOf(arr[i]) === -1) repeatArr.push(arr[i])
  return repeatArr;
}

const handleRemoveRepeat3 = (arr) => {
  let repeatArr = [];
  for (let i = 0, len = arr.length; i < len; i++)
    if (!repeatArr.includes(arr[i])) repeatArr.push(arr[i])
  return repeatArr;
}

//去重
const handleRemoveRepeat4 = (arr) => arr.filter((item,index) => arr.indexOf(item,0) === index);

