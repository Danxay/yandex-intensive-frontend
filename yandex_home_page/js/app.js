const searchFormInput = document.querySelector(".search-form__input")
const searchFormBtn = document.querySelector(".search-form__btn")

searchFormBtn.addEventListener("click", () => {
  if (searchFormInput.value) {
    document.location.href = `https://yandex.ru/search/touch/?text=${searchFormInput.value}`;
  }
})