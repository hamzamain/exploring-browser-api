console.log("inside js file");
// alert("this is alert");
const alertBtn = () => {
  const num = Math.round(Math.random() * 10);
  console.log(num);
  if (num <= 5) {
    alert(`the number ${num} is less then or Equal 5`);
  }
};

const askQuestion = () => {
  const disition = confirm("well you go to tour");
  if (disition === true) {
    console.log(disition);
    alert("700 taka bikash kor");
  } else {
    console.log("DMG!!! Dure Giya Mor");
  }
};
const getUserInfo = () => {
  const name = prompt("what is your name", 2000);
  console.log(name);
};

const isYes = confirm("jabi dhaka");
if (isYes === true) {
  alert("1000 taka bikash kor");
}

const name = prompt("what is your name?");
