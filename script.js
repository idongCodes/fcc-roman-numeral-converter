const getEl = (el) => {
    return document.getElementById(el)
  };
  
  const numberInput = getEl("number");
  const convertBtn = getEl("convert-btn");
  const output = getEl("output");
  
  const romanNumValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  
  convertBtn.addEventListener("click", () => {
    if (numberInput.value === "") {
      output.textContent = "Please enter a valid number";
    } else if (numberInput.value < 0) {
      output.textContent = "Please enter a number greater than or equal to 1";
    } else if (numberInput.value >= 4000) {
      output.textContent = "Please  enter a number less than or equal to 3999";
    } else {
      let romanNum = "";
      for (let key in romanNumValues) {
        while (numberInput.value >= romanNumValues[key]) {
          romanNum += key;
          numberInput.value -= romanNumValues[key];
        }
      }
      output.textContent = romanNum;
    }
  });