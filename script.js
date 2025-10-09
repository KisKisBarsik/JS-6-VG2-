
document.getElementById("submit0").addEventListener("click", function () {

  let city_name = document.getElementById("input0").value.toLowerCase()
  let country_code = document.getElementById("input1").value.toLowerCase()
  const myKey = "f90144eda55181ef3c4c1367f8e851ed"

  // This API gives you a kelvin as a temperature, but to change it to celsius you have to write &units=metric after ${myKey}
  let myAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${myKey}`

  let div = document.getElementById("mainContent")

  div.style.display = "flex"

  fetch(myAPI)

    .then(response => response.json())
    .then(data => {

      console.log(data);
          
      let p0 = document.getElementById("textInfo0")
      let p1 = document.getElementById("textInfo1")
      let p2 = document.getElementById("textInfo2")
      let p3 = document.getElementById("textInfo3")

      let celsius = Math.round((data.main.temp - 273.15),2)
      let maxTemp = Math.round(data.main.temp_max - 273.15)
      let minTemp = Math.round(data.main.temp_min - 273.15)

      p0.innerText = `${data.name}, ${data.sys.country}`
      p1.innerText = `${celsius} ° C`
      p2.innerText = `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}`
      p3.innerText = `${minTemp} ° C / ${maxTemp} ° C`
            
    })

})





// Enter funksjon
var input = document.getElementById("input0")
var submitBtn = document.getElementById("submit0")

input.addEventListener("keypress", function(event) {

  // If the user presses the "Enter" key on the keyboard

  if (event.key === "Enter") {

    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    submitBtn.click();

  }

})