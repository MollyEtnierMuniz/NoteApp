const registerForm = document.getElementById('register-form')
const registerUserName = document.getElementById('register-username')
const registerPassword = document.getElementById('register-password')

const headers = {
'content-Type' : 'application/json'
}

const baseUrl = 'http://localhost8080/api/v1/users'

///the name seems good enough for me
const handleSubmit = async (e) =>{
    e.preventDefault()

    let bodyObj = {
        username: registerUserName.value,
        password: registerPassword.value
    }

const response = await fetch (`${baseUrl}/register`,
    {
    method: "POST",
    body: JSON.stringify(bodyObj),
    headers: headers
    })
    .catch(err => console.error.(err.message))

const responseArr =await response.json()

if (response.status === 200){
    window.location.replace(responseArr[])
    }
}

registerForm.addEventListener("submit", handleSubmit)

