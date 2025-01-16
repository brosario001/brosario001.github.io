document.addEventListener("DOMContentLoaded", () => {

    const leftButton = document.querySelector('.nav_button_left').addEventListener("click",moveLeft);
    const rightButton = document.querySelector('.nav_button_right').addEventListener("click",moveRight);

    const galleryImages = document.querySelectorAll('.gallery_img');
    let activeIndex = 0;

    function updateGallery() {
        galleryImages.forEach((img, index) => {
            img.classList.remove('active', 'next', 'prev'); 

            if (index === activeIndex) {
                img.classList.add('active'); 
            } else if (index === (activeIndex + 1) % galleryImages.length) {
                img.classList.add('next'); 
            } else if (index === (activeIndex - 1 + galleryImages.length) % galleryImages.length) {
                img.classList.add('prev'); 
            }
        });
    }
    
    function cycleImages() {
        activeIndex = (activeIndex + 1) % galleryImages.length; // Move to the next image
        updateGallery();
    }

    function moveRight(){
        cycleImages()
    }

    function moveLeft() {
        activeIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length; 
        updateGallery();
    }

    updateGallery();

    //parameters: (function, time)
    setInterval(cycleImages, 4500);
});

