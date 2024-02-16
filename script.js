 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
                    let radius = prompt("Enter the radius of the circle:");
            if (isNaN(radius) || radius <= 0) {
    console.log("Please enter a valid positive number for the radius.");
} else {
    const area = Math.PI * radius * radius;

    const roundedArea = area.toFixed(2);

    console.log(`The area of the circle with radius ${radius} is ${roundedArea}.`);
}
calculateArea();
