// Recursion

/* 
    Write a recursive function called reverse which accepts 
    a string and returns a new string in reverse.

    Ex: 
    reverse('awesome') // 'emosewa'
    reverse('rithmschool') // 'loohcsmhtir'
*/

const reverse = (str: string) => {
  if (str.length <= 0) return null;

  let endI = str.length - 1;

  const helper = (index: number): string => {
    if (index < 0) return "";

    return str[index] + helper(index - 1);
  };

  return helper(endI);
};

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
