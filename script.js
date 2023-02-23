


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

    if (location.href.includes("youtube.com")) {
        let inteval = setInterval(() => {

            try {
                document.querySelector(".ytp-chrome-top").remove();

                clearInterval(inteval);
            } catch (e) {
                console.log(e)
            }


        }, 2)
    }

    if (location.href.includes("twitter.com")) {
        let inteval = setInterval(() => {

            try {
                document.querySelector(".css-4rbku5").remove();

                clearInterval(inteval);
            } catch (e) {
                console.log(e)
            }


        }, 2)
    }




}


if (location.href.includes("instagram.com")) {
    let inteval = setInterval(() => {

        try {
            document.querySelector("body").remove();

            clearInterval(inteval);
        } catch (e) {
            console.log(e)
        }


    }, 2)
}