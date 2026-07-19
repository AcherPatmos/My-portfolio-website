const nameInput = document.getElementById("name_input");
const emailInput = document.getElementById("email_input");
const message = document.getElementById("Textarea");

document.getElementById("button").addEventListener("click", function () {
  if (
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    message.value !== ""
  ) {
    window.alert("Your message has been sent!");
  } else if (
    nameInput.value === "" &&
    emailInput.value === "" &&
    message.value === ""
  ) {
    alert("Please fill all the empty placeholders");
  } else if (emailInput.value === "" && message.value === "") {
    alert(
      `${nameInput.value}, please fill in the rest of the empty placeholders`,
    );
  } else if (message.value === "") {
    alert(`${nameInput.value}, please write your intended message`);
  } else if (nameInput.value === "") {
    alert("Please enter your name");
  } else if (emailInput.value === "") {
    alert(`${nameInput.value}, please enter your email address`);
  }
});
