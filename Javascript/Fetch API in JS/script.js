//JavaScript can be used to send and return information from the network when needed(AJAX)
let p = fetch("http://api.weatherapi.com/v1/current.json?key=b229f4bf0999467485b94137232007&q=London&aqi=no")
p.then((response)=>{
    console.log(response.status) //status code
    console.log(response.ok)
    console.log(response.headers)
    // console.log(response.text())
    return response.json()
}).then((value2)=>{
    console.log(value2)

})