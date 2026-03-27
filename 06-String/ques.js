function toggleCase(str) {
  let newStr = "";
  for (let char of str) {
    let c = char.charCodeAt();
    if (c >= 65 && c <= 90) {
      newStr += String.fromCharCode(c).toLowerCase();
    } else if (c >= 97 && c <= 132) {
      newStr += String.fromCharCode(c).toUpperCase();
    }
    else {
      newStr += String.fromCharCode(c);
    }
  }
  return newStr;
}

console.log(toggleCase('AcgDfD'));

function capitalizeFirstAndLast(str) {
  let strArr = str.split(" ");
  let newStr = "";
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i];
    let first = word[0].toUpperCase();
    let mid = "", last = "";
    if (word.length > 1) {
      mid = word.substring(1, word.length - 1);
      last = word.substring(word.length - 1).toUpperCase();
    }

    newStr += first + mid + last + " ";
  }
  return newStr;
}

console.log(capitalizeFirstAndLast("h hh hhh"));

function isAnagram(s1, s2) {
  let sum1 = 0, sum2 = 0;
  for (let char of s1) {
    sum1 += char.charCodeAt();
  }
  for (let char of s2) {
    sum2 += char.charCodeAt();
  }

  if (sum1 === sum2) return true;
  return false;
}

console.log(isAnagram("listen", "silent"));