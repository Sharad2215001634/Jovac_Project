document.querySelector('.forgot-password-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('reset-email').value;

    const response = await fetch('/auth/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    });

    const data = await response.json();
    
    if (response.ok) {
        alert('Reset link sent to your email.');
    } else {
        alert('Error: ' + data.message);
    }
});
