
async function saveData() {
            
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
}


// gets username
function getUsername() {

}


// gets password
function getPassword() {

}