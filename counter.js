// Function to get and display the visitor count
function displayVisitorCount() {
    const namespace = 'drnawafalzabi-counter';
    const initialCount = 50000;

    fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
        .then(response => response.json())
        .then(data => {
            const currentCount = data.value;
            const displayCount = currentCount + initialCount;
            const visitsElement = document.getElementById('visits');
            if (visitsElement) {
                visitsElement.innerText = displayCount;
            }
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
            const visitsElement = document.getElementById('visits');
            if (visitsElement) {
                // Fallback in case of error
                visitsElement.innerText = initialCount;
            }
        });
}
 
// Ensure the function runs after the page loads
document.addEventListener('DOMContentLoaded', displayVisitorCount);


