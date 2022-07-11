// tangkap class jumbo
const jumbo = document.querySelector(".jumbo");

// tangkap container
const container = document.querySelector(".container");

// tangkap thumb
const thumbs = document.querySelectorAll(".thumb");

// beri event
container.addEventListener("click", function (e) {
    // validasi
    if (e.target.className == "thumb") {
        jumbo.src = e.target.src;

        // add animation fade
        jumbo.classList.add("fade");

        // set time
        setTimeout(function () {
            jumbo.classList.remove("fade");
        }, 500);

        // cek class active
        thumbs.forEach(function (e) {
            e.className = "thumb";
        });

        e.target.classList.add("active");
    }
});
