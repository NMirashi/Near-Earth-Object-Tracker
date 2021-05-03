
var current = new Date();
var date = current.getFullYear() + "-" + (current.getMonth()+1) + "-" + (current.getDate());

var request = new XMLHttpRequest()
var url = "https://api.nasa.gov/planetary/apod?" + "date="+date+ "&api_key=yGIR0aJmk0heKdgXmZrFt8jaZRDO0DySxVxMfCxG" 
request.open('GET', url, true)
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    

    const apodImage = document.createElement('img')
    apodImage.setAttribute('src', data["url"])
    var image = document.getElementById('background_square').appendChild(apodImage)
    image.style.marginTop = 64;
    image.style.transform = "translate(0, 200px)"
    image.classList.add("center")

    var explanation = document.createElement('p')
    explanation.innerHTML = data["explanation"]
    var text = document.getElementById('background_square').appendChild(explanation)
    text.style.margin = 64;
    text.style.transform = "translate(0, 200px)"

    
    const apodImage1 = document.createElement('iframe')
    apodImage1.setAttribute('src', data["url"])
    var image1 = document.getElementById('background_square').appendChild(apodImage1)
    image1.style.marginTop = 64;
    image1.style.transform = "translate(0, 200px)"
    image1.classList.add("center")
}



request.send()