// JavaScript to handle the search functionality
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the search query from the input box
    var query = document.getElementById('searchInput').value;

    // Display the search result
    var resultElement = document.getElementById('searchResult');
    resultElement.innerText = 'You searched for: ' + query;

    // Clear the input box (optional)
    document.getElementById('searchInput').value = '';
});
