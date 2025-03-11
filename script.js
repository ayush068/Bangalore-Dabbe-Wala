function subscribe(plan) {
    alert("You have selected the " + plan + " Plan. We will contact you soon!");
}

function orderMeal() {
    let mealType = document.querySelector('input[name="meal"]:checked').value;
    alert("You have selected a " + mealType + " meal. Your order is being processed!");
}
