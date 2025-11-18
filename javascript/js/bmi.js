console.log("BMI JS FILE LOADED");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("animalForm");
    const resultBox = document.getElementById("resultBox");
    const result = document.getElementById("result");
    const error = document.getElementById("error");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const animal = document.getElementById("animalType").value;
        const weight = parseFloat(document.getElementById("weight").value);
        const heightCm = parseFloat(document.getElementById("height").value);

        resultBox.style.display = "none";
        error.textContent = "";

        // Basic validation
        if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
            error.textContent = "Please enter valid numbers greater than 0.";
            return;
        }

        // Realistic ranges for height per species (cm)
        const realisticHeights = {
            dog: [10, 100],
            cat: [15, 50],
            sheep: [40, 120],
            goat: [40, 120],
            rabbit: [10, 50],
            horse: [100, 200],
            cow: [100, 200],
            bird: [5, 60]
        };

        const [minHeight, maxHeight] = realisticHeights[animal];

        if (heightCm < minHeight || heightCm > maxHeight) {
            error.textContent = `Please enter a realistic height for a ${animal}. (${minHeight}-${maxHeight} cm)`;
            return;
        }

        // Convert cm to meters
        const heightM = heightCm / 100;

        // BMI formula (weight / height^2)
        const bmi = parseFloat((weight / (heightM ** 2)).toFixed(2));

        // BMI ranges per species (for simplicity, approximate healthy range)
        const bmiRanges = {
            dog: { under: 15, healthy: 25, overweight: 30 },
            cat: { under: 12, healthy: 20, overweight: 25 },
            sheep: { under: 16, healthy: 26, overweight: 32 },
            goat: { under: 15, healthy: 25, overweight: 31 },
            rabbit: { under: 10, healthy: 18, overweight: 22 },
            horse: { under: 17, healthy: 28, overweight: 33 },
            cow: { under: 20, healthy: 35, overweight: 45 },
            bird: { under: 8, healthy: 15, overweight: 20 }
        };

        const range = bmiRanges[animal];
        let category = "";

        if (bmi < range.under) category = "Underweight";
        else if (bmi < range.healthy) category = "Healthy";
        else if (bmi < range.overweight) category = "Overweight";
        else category = "Obese";

        result.innerHTML = `
            <strong>Animal:</strong> ${animal.toUpperCase()}<br>
            <strong>Weight:</strong> ${weight} kg<br>
            <strong>Height:</strong> ${heightCm} cm<br>
            <strong>BMI:</strong> ${bmi}<br>
            <strong>Status:</strong> ${category}
        `;

        resultBox.style.display = "block";
    });
});