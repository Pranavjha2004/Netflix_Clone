let splash_screen_video = document.querySelector("#splash-screen-video");
let splash_screen = document.querySelector(".splash-screen")
let main_container = document.querySelector(".main-container");

splash_screen_video.addEventListener("ended",function(){
    splash_screen.style.display = "none";
    main_container.style.display = "block";
});