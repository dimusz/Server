const button = document.getElementById("contact-button");
button.addEventListener("click", async event => {
  const newName = document.getElementById("name").value;
  const newEmail = document.getElementById("email").value;
  const newPhone = document.getElementById("phone").value;
  const newMessage = document.getElementById("mesaj").value;


if ("geolocation" in navigator) {
  console.log("geolocation available");
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("latitude").textContent = lat;
    document.getElementById("longitude").textContent = lon;

    const data = { lat, lon,newName, newPhone, newEmail, newMessage};
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("/api", options);
    const responseData = await response.json();
    console.log(responseData);
  });
} else {
  console.log("geolocation not available");
}
});