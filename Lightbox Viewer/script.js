let thumbnails = document.querySelectorAll(".gallery-item");
let lightbox = document.querySelector(".lightbox");
let closeBtn = document.getElementById("close-btn");
let lightboxImage = document.getElementById("lightbox-image");
closeBtn.addEventListener("click", () => lightbox.classList.remove("showed"));


function showPicture(item) {
    let thumbnailSrc = item.src;
    let fullSrc = thumbnailSrc.replace("-thumbnail", "");
    lightbox.classList.add("showed");
    lightboxImage.setAttribute("src", fullSrc)
}

thumbnails.forEach((thumbnail) => thumbnail.addEventListener("click", () => showPicture(thumbnail)));
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("showed");
    }
})