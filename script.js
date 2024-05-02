document.getElementById('addItemForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const itemName = document.getElementById('itemName').value;
    const itemDescription = document.getElementById('itemDescription').value;

    try {
        const response = await fetch('https://api.github.com/repos/your-username/AI-Pin-Up-Board/issues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            },
            body: JSON.stringify({
                title: itemName,
                body: itemDescription
            })
        });
        
        if (response.ok) {
            document.getElementById('addItemForm').reset(); // Clear form inputs
            document.getElementById('confirmationMessage').style.display = 'block'; // Show confirmation message
        } else {
            
            alert('Failed to add item. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to add item. Please try again later.');
    }
});
