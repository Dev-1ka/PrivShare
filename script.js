function getLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude.toFixed(4);
                const longitude = position.coords.longitude.toFixed(4);
                document.getElementById('latitudeInput').value = latitude;
                document.getElementById('longitudeInput').value = longitude;
            },
            (error) => {
                alert("Unable to retrieve location.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Encrypt the location based on either the input values or the current location
function encryptLocation() {
    const latitude = document.getElementById('latitudeInput').value;
    const longitude = document.getElementById('longitudeInput').value;

    if (!latitude || !longitude) {
        alert("Please enter latitude and longitude, or use 'Share Current Location'.");
        return;
    }

    const location = ${latitude},${longitude};
    const encryptedLocation = btoa(location); // Mock encryption using Base64 encoding

    // Display encrypted text as a link-like format
    const encryptedLink = document.getElementById('encryptedLink');
    encryptedLink.innerText = https://maps.example.com/?q=${encryptedLocation};
    encryptedLink.href = https://maps.example.com/?q=${encryptedLocation};
}

// Decrypt the location
function decryptLocation() {
    const encryptedInput = document.getElementById('encryptedInput').value;

    if (!encryptedInput) {
        alert("Please enter the encrypted text.");
        return;
    }

    try {
        const decryptedLocation = atob(encryptedInput); // Mock decryption using Base64 decoding
        document.getElementById('decryptedText').innerText = decryptedLocation;
    } catch (error) {
        alert("Invalid encrypted text.");
        document.getElementById('decryptedText').innerText = "";
    }
}