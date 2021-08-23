// Recursion
/* 
    Write a function called stringifyNumbers which 
    takes in an object and finds all of the values 
    which are numbers and converts them to strings. 
    Recursion would be a great way to solve this!

    Ex:
    let obj = {
        num: 1,
        test: [],
        data: {
            val: 4,
            info: {
                isRight: true,
                random: 66
            }
        }
    }
    stringifyNumbers(obj)
*/

const stringifyNumbers = (obj: any): any => {
  let newObj: any = {};

  for (let key in obj) {
    if (
      !isNaN(obj[key]) &&
      typeof obj[key] !== "boolean" &&
      obj[key].constructor !== Array
    ) {
      newObj[key] = `${obj[key]}`;
    } else if (obj[key].constructor === Object) {
      newObj[`${key}`] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  })
);
