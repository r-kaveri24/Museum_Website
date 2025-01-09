// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll("#portfolio-filters li");
  // Get all portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // Add click event listener to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove the active class from all filter buttons
      filterButtons.forEach((btn) => btn.classList.remove("filter-active"));

      // Add the active class to the clicked button
      button.classList.add("filter-active");

      // Get the filter value (data-filter attribute)
      const filterValue = button.getAttribute("data-filter");

      // Loop through portfolio items and show/hide based on the filter
      portfolioItems.forEach((item) => {
        if (
          filterValue === "*" ||
          item.classList.contains(filterValue.slice(1))
        ) {
          item.style.display = "block"; // Show item
        } else {
          item.style.display = "none"; // Hide item
        }
      });
    });
  });
});
