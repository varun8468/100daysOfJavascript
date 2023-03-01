const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);

function palindrome() {
  let word = document.querySelector(".input-text").value;
  // let reversed = reverseString(word);
  // if(word.length === 0) result.innerHTML = "Please enter a word";
  // else if(word === reversed){
  //     result.innerHTML = "This is palindrome";
  // }else result.innerHTML = "This is not palindrome";
  word = word.toLowerCase();
  let res = word.toUpperCase() + " is palindrom" 
  if (word.length === 0) res = "Please enter a word";
  else {
    let start = 0, end = word.length - 1;
    while (start != end) {
      if (word[start] === word[end]) {
        start++;
        end--;
      } else {
        res = word.toUpperCase() + " is not palindrome";
        break;
      }
    }
  }
  result.innerHTML = res;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
