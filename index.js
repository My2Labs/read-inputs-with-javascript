const firstName = document.querySelector("#first-name")
const lastName = document.querySelector("#last-name")
const email = document.querySelector("#email")


function logValues() {
    let theFirstName = firstName.value
    let theLastName = lastName.value
    let theEmail = email.value
    const theReturn = "First Name: " + theFirstName + " Last Name: " + theLastName + " Email: " + theEmail;

    console.log(theReturn)
}