const userName = document.getElementById("name")
const userEmail = document.getElementById("email")
const userMsg = document.getElementById("message")

// const form = document.getElementById("form-contact")
const btn = document.getElementById("sendEmail")
// const formData = new FormData(form,btn)


btn.addEventListener("click",e=>{
    e.preventDefault()
const dataEmail = {
    name: userName.value,
    email: userEmail.value,
    message: userMsg.value
}
console.log("Envio la info")
console.log(dataEmail)

});

const senderEmail = dataEmail =>{
    Email.send({
        From: dataEmail.email,
        To: 'marksrod1990@gmail.com',
        Subject: "WEB Contact " + `${dataEmail.name}`,
        Body: dataEmail.message
    })
    .then(res=> {
        alert("Email enviado con éxito"  ) // Mensaje de alerta en caso de éxito en la entrega del email
        console.log({status: OK , message: message})
    })
    .catch(err=>{
        alert("Error al Enviar el Correo")
        console.log({status: Error, message: err})
    })
}
