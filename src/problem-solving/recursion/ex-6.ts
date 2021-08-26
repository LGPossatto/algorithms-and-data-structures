// Recursion
/* 
    Write a recursive function called nestedEvenSum. 
    Return the sum of all even numbers in an object which 
    may contain nested objects.

    Ex:
    var obj1 = {
      outer: 2,
      obj: {
        inner: 2,
        otherObj: {
          superInner: 2,
          notANumber: true,
          alsoNotANumber: "yup"
        }
      }
    }

    var obj2 = {
      a: 2,
      b: {b: 2, bb: {b: 3, bb: {b: 2}}},
      c: {c: {c: 2}, cc: 'ball', ccc: 5},
      d: 1,
      e: {e: {e: 2}, ee: 'car'}
    };

    nestedEvenSum(obj1); // 6
    nestedEvenSum(obj2); // 10
*/

// {1: {21: 2}, 2: 'ball', 3: {31: 5}}
// {{c: 2}, }

const nestedEvenSum = (obj: any) => {
  let total = 0;

  const helper = (obj: any) => {
    for (let key in obj) {
      if (obj[key].constructor === Object) {
        helper(obj[key]);
      }
      if (!isNaN(obj[key]) && obj[key] % 2 === 0) {
        total += obj[key];
      }
    }
  };

  helper(obj);
  return total;
};

console.log(
  nestedEvenSum({
    outer: 2,
    hmmm: 3,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  })
); // 6

console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  })
); // 10
