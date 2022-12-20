
async function saveData() {
    // get username and password from placeholders
    let username = document.getElementById('uName').value;
    let password = document.getElementById('pswd').value;

       
    const data = { username, password };
    const  options = {
        method: 'POST',
        headers: { // specifies that we are sending the data in a json format
            'content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
        //body: JSON.stringify(data) // where we package all of the data
    };
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
}

