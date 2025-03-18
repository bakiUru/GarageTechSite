const switchMode = document.querySelector(".switchMode");

switchMode.addEventListener("click",e=>{
    //Check if exist a save mode
    memMode()
    switchMode.classList.toggle("active")
    document.body.classList.toggle("dark")


    //Set LocalStorage MODE
    if (switchMode.classList.contains('active'))
        
       localStorage.setItem("mode", "dark")
    else
        localStorage.setItem("mode", "light")
    
})


const memMode =()=>{
    if(localStorage.getItem("mode") === "dark"){
        switchMode.classList.add("active")
        document.body.classList.add("dark")
    }
}