// Function to toggle project details visibility with smooth transition
function toggleDetails(id) {
    const element = document.getElementById(id);

    // Check if the element is currently hidden or shown
    if (element.style.display === "none" || element.style.display === "") {
        // Smoothly expand the section
        element.style.display = "block";
        element.style.maxHeight = "1000px";  // Adjust the maxHeight based on content size
        element.style.transition = "max-height 0.5s ease-in-out";
    } else {
        // Smoothly collapse the section
        element.style.maxHeight = "0";
        element.style.transition = "max-height 0.5s ease-in-out";
        
        // Hide the section after the transition ends
        setTimeout(() => {
            element.style.display = "none";
        }, 500);  // Duration matches the transition time
    }
}
