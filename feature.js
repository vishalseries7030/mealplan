const setGoalBtn = document.getElementById("set-goal-btn");
const goalSection = document.getElementById("goal-section");
const trackerSection = document.getElementById("tracker-section");
const caloriesIndicator = document.getElementById("calories-indicator");
const proteinsIndicator = document.getElementById("proteins-indicator");
const goalcompletesection = document.getElementById("input-section")
const section2 = document.getElementById("section-2")

const progressBars = {
  carbs: document.querySelector(".progress-carbs"),
  fats: document.querySelector(".progress-fats"),
};

let goals = {
  calories: 0,
  carbs: 0,
  fats: 0,
  proteins: 0,
};

let current = {
  calories: 0,
  carbs: 0,
  fats: 0,
  proteins: 0,
};
// goalCompleteSection.style.display = "none"

setGoalBtn.addEventListener("click", () => {
  goals.calories = parseInt(document.getElementById("goal-calories").value);
  goals.carbs = parseInt(document.getElementById("goal-carbs").value);
  goals.fats = parseInt(document.getElementById("goal-fats").value);
  goals.proteins = parseInt(document.getElementById("goal-proteins").value);

  if (Object.values(goals).some(isNaN)) {
    alert("Please fill in all goals correctly.");
    return;
  }
  section2.style.display="block";

  goalSection.style.display = "none";
  trackerSection.style.display = "block";
});

document.getElementById("add-meal-btn").addEventListener("click", () => {
  const mealName = document.getElementById("meal-name").value;
  const calories = parseInt(document.getElementById("calories").value);
  const carbs = parseInt(document.getElementById("carbs").value);
  const fats = parseInt(document.getElementById("fats").value);
  const proteins = parseInt(document.getElementById("proteins").value);

  if (!mealName || isNaN(calories) || isNaN(carbs) || isNaN(fats) || isNaN(proteins)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  current.calories += calories;
  current.carbs += carbs;
  current.fats += fats;
  current.proteins += proteins;

  updateProgress();

  const mealItem = document.createElement("li");
  mealItem.textContent = `${mealName}: ${calories} cal, ${carbs}g carbs, ${fats}g fats, ${proteins}g proteins`;
  document.getElementById("meals").appendChild(mealItem);
});

function updateProgress() {
  const updateCircularIndicator = (indicator, current, goal) => {
    const percentage = Math.min((current / goal) * 100, 100);
    indicator.style.background = `conic-gradient(#007bff ${percentage}%, #f1f1f1 ${percentage}%)`;
    indicator.querySelector("span").textContent = Math.round(percentage) + "%";
  };

  updateCircularIndicator(caloriesIndicator, current.calories, goals.calories);
  updateCircularIndicator(proteinsIndicator, current.proteins, goals.proteins);

  Object.keys(progressBars).forEach((key) => {
    const percentage = Math.min((current[key] / goals[key]) * 100, 100);
    progressBars[key].style.width = percentage + "%";
    progressBars[key].textContent = Math.round(percentage) + "%";
  });
}





let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
progressEndValue = 90,    
speed = 100;

let progress = setInterval(() => {
progressStartValue++;

progressValue.textContent = `${progressStartValue}%`
circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

if(progressStartValue == progressEndValue){
    clearInterval(progress);
}    
}, speed);




const mealOptions = document.querySelectorAll(".wrapping-container");

// Add event listeners to each meal option
mealOptions.forEach(option => {
  option.addEventListener("click", () => {
    // Show the input-section when a meal option is clicked
    goalcompletesection.style.display = "block"; // Make input-section visible
    // trackerSection.style.display = "none"; // Optionally hide the tracker section
  });
});



// // Select the elements for the meal options
// const mealOptions = document.querySelectorAll(".wrapping-container");

// // Add calorie values for each meal option
// const mealCalories = {
//   breakfast: 300,
//   lunch: 600,
//   snack: 200,
//   dinner: 500,
//   "different-meal": 400, // Default calorie value for a different meal
// };

// // Add event listeners to each meal option
// mealOptions.forEach(option => {
//   option.addEventListener("click", () => {
//     const mealType = option.querySelector("option").value; // Get the meal type (e.g., breakfast)
//     const mealCalorieValue = mealCalories[mealType] || 0; // Get calories for the meal type

//     // Subtract calories from the total
//     current.calories -= mealCalorieValue;

//     // Prevent negative values
//     if (current.calories < 0) current.calories = 0;

//     // Update the progress bar and indicators
//     updateProgress();

//     // Show the goal section
//     goalSection.style.display = "block";
//     trackerSection.style.display = "none"; // Hide the tracker section
//   });
// });

// // Function to update progress (already defined in your script)
// function updateProgress() {
//   const updateCircularIndicator = (indicator, currentValue, goalValue) => {
//     const percentage = Math.min((currentValue / goalValue) * 100, 100);
//     indicator.style.background = `conic-gradient(#007bff ${percentage}%, #f1f1f1 ${percentage}%)`;
//     indicator.querySelector("span").textContent = Math.round(percentage) + "%";
//   };

//   updateCircularIndicator(caloriesIndicator, current.calories, goals.calories);

//   // Update other indicators as needed (like carbs, fats, proteins)
// }
