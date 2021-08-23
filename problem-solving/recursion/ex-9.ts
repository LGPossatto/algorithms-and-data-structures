// Recursion
/* 
    Write a function called collectStrings which 
    accepts an object and returns an array of all 
    the values in the object that have a typeof string.

    Ex:
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

    collectStrings(obj) // ["foo", "bar", "baz"])
*/

const collectStrings = (obj: any) => {
  let total: string[] = [];

  const helper = (obj: any) => {
    for (let key in obj) {
      if (obj[key].constructor === Object) {
        helper(obj[key]);
      }
      if (typeof obj[key] === "string") {
        total.push(obj[key]);
      }
    }
  };

  helper(obj);
  return total;
};

console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  })
); // ["foo", "bar", "baz"])
