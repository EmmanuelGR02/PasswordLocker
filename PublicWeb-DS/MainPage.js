
function saveData() {
    if ('geolocation' in navigator) { // checks to see if geolocation is available
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(async position => {
            
            let username = document.getElementById('uName').value;
            let password = document.getElementById('pswd').value;
    
            const data = { username, password };
            const  options = {
                method: 'POST',
                headers: { // specifies that we are sending the data in a json format
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(data) // where we package all of the data
            };
            const response = await fetch('/api', options);
            const json = await response.json();
            console.log(json);
        });
    } else {
        console.log('geolocation is not available');
    }
}


// gets username
function getUsername() {

}


// gets password
function getPassword() {

}