const birthday = document.querySelector(".birthday");
const resultInput = document.querySelector(".result");

function calculateBirthday() {
  const birthdayDate = birthday.value;

  const birthdayStamp = Date.parse(birthdayDate);
  const currentStamp = Date.now();
  const timeDifference = birthdayStamp - currentStamp;
  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (birthdayDate == "") {
    (resultInput.textContent = "Пожалуйста введите дату рождения") &&
      resultInput.classList.toggle("error");
  } else {
    (resultInput.textContent = `До вашего дня рождения осталось ${daysLeft} дней`) &&
      resultInput.classList.remove("error");
  }
}
