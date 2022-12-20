
async function saveData() {
    // get username and password from placeholders
    let username = document.getElementById('uName').value;
    let password = document.getElementById('pswd').value;

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const myForm = event.target;
        const formData = new FormData(myForm);
        const data = { username, password };
        const  options = {
            method: 'POST',
            headers: { // specifies that we are sending the data in a json format
                'content-Type': 'application/json'
            },
            body: new URLSearchParams(formData).toString()
            //body: JSON.stringify(data) // where we package all of the data
        };
        const response = await fetch('/', options);
        const json = await response.json();
        console.log(json);
    };
    document
        .querySelector("form")
        .addEventListener("submit", handleSubmit);
}

