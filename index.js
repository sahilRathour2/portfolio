document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".video video");
    const popupVideo = document.querySelector(".popup-video");
    const popupVideoSource = document.querySelector(".popup-video-source");
    const closeButton = document.querySelector(".popup-video > span");

    // Function to open the popup video
    function openPopupVideo(videoSrc) {
        popupVideoSource.src = videoSrc;
        popupVideo.classList.add("active");
        document.body.classList.add("popup-active");
        popupVideoSource.play(); // Start playing the video
    }

    // Function to close the popup video
    function closePopupVideo() {
        popupVideo.classList.remove("active");
        document.body.classList.remove("popup-active");
        popupVideoSource.pause(); // Pause the video
        popupVideoSource.currentTime = 0; // Reset video time
    }

    // Event listeners to open popup video when clicked
    videos.forEach(function (video) {
        video.addEventListener("click", function () {
            const videoSrc = this.getAttribute("src");
            openPopupVideo(videoSrc);
        });
    });

    // Event listener to close popup video when close button is clicked
    closeButton.addEventListener("click", closePopupVideo);

    // Event listener to close popup video when clicked outside of the video
    popupVideo.addEventListener("click", function (event) {
        if (!event.target.closest(".popup-video > video")) {
            closePopupVideo();
        }
    });

    // Event listener to close popup video when Esc key is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopupVideo();
        }
    });
});
