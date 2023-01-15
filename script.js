document.addEventListener("keydown", (e) => {
    console.log(e)
})



window.onload = () => {

    if (location.href.includes("byjus.com")) {
        let inteval = setInterval(() => {

            try {
                document.querySelector(".shaka-play-button").remove();

                clearInterval(inteval);
            } catch (e) {
                console.log(e)
            }


        }, 2)
    }
}
