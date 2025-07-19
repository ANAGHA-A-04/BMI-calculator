function calculateBMI() {
  const age = document.getElementById("age").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const wunit = document.getElementById("wunit").value;
  const hunit = document.getElementById("hunit").value;
  const result = document.getElementById("result");

  if (!age || !weight || !height || !wunit || !hunit) {
    result.textContent = "Please enter valid age, weight, height, and units.";
    return;
  }

  const weightinkg = converttokg(weight, wunit);
  const heightinmeter = converttometer(height, hunit);
  const bmi = weightinkg / (heightinmeter * heightinmeter);
  const bmicategory = getBMICategory(bmi, age);
  result.textContent = `Your BMI is ${bmi.toFixed(2)} - ${bmicategory}`;
}

function converttokg(weight, wunit) {
  if (wunit === "lb") {
    return weight * 0.453592;
  }
  return weight;
}

function converttometer(height, hunit) {
  switch (hunit) {
    case "cm":
      return height / 100;
    case "in":
      return height * 0.0254;
    case "ft":
      return height * 0.3048;
    case "m":
      return height;
    default:
      return height;
  }
}

function getBMICategory(bmi, age) {
  age = parseInt(age);

  if (age >= 18) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi < 24.9) return "Normal weight";
    else if (bmi < 29.9) return "Overweight";
    else return "Obesity";
  } else if (age >= 13) {
    if (bmi < 17.5) return "Underweight";
    else if (bmi < 22.5) return "Normal weight";
    else return "Overweight or Obese";
  } else if (age >= 6) {
    if (bmi < 14) return "Underweight";
    else if (bmi < 18) return "Normal weight";
    else return "Overweight or Obese";
  } else if (age >= 2) {
    if (bmi < 14) return "Underweight";
    else if (bmi < 17) return "Normal weight";
    else return "Overweight or Obese";
  } else {
    return "BMI not reliable for babies under 2";
  }
}
