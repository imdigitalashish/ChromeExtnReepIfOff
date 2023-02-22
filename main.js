window.onload = () => {
    document.querySelector("h1").style.color = "red";


    data = {}

    if (!!localStorage.getItem("extData")) {
        // data = JSON.parse(localStorage.getItem("extData"))
    }



    document.addEventListener("keydown", (e) => {
        console.log(e)
    })
    


    // document.querySelector("body").addEventListener("click", () => {
    //     console.log('hello');
    //     data["https://byjus.com", "this is the component"];
    //     localStorage.setItem("extData", "ashu");
    // })
}