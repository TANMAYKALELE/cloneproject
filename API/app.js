const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
   const dropdowns = document.querySelectorAll(".dropdown select")

console.log(BASE_URL);

for (code in countryList){
    console.log(code, countryList[code]);

}