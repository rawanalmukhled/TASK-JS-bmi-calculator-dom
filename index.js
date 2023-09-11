function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let heightInMeter = height / 100;

  let bmi = weight / (heightInMeter * heightInMeter);
  alert(bmi);

  if (bmi <= 18.5) {
    alert("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("Healthy Weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("Overweight");
  } else {
    alert("Obesity");
  }

  if (age >= 19 && age <= 24) {
    if (bmi >= 19 && bmi <= 24) {
      alert("healthy");
    } else {
      alert("unhealthy");
    }
  } else if (age >= 25 && age <= 34) {
    if (bmi >= 20 && bmi <= 25) {
      alert("healthy");
    } else {
      alert("unhealthy");
    }
  } else if (age >= 35 && age <= 44) {
    if (bmi >= 21 && bmi <= 26) {
      alert("healthy");
    } else {
      alert("unhealthy");
    }
  } else if (age >= 45 && age <= 54) {
    if (bmi >= 55 && bmi <= 64) {
      alert("healthy");
    } else {
      alert("unhealthy");
    }
  } else if (age > 65) {
    if (bmi >= 24 && bmi <= 29) {
      alert("healthy");
    } else {
      alert("unhealthy");
    }
  } else {
    alert("unhealthy");
  }
}
