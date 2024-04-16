document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("mouseover", function() {
            highlightStars(star);
        });

        star.addEventListener("click", function() {
            const rating = parseInt(star.getAttribute("data-value"));
            setRating(rating);
        });
    });

    function highlightStars(clickedStar) {
        let clickedStarValue = parseInt(clickedStar.getAttribute("data-value"));
        stars.forEach(star => {
            let starValue = parseInt(star.getAttribute("data-value"));
            if (starValue <= clickedStarValue) {
                star.querySelector(".star-fill").setAttribute("fill", "#ffd700");
            } else {
                star.querySelector(".star-fill").setAttribute("fill", "#000000");
            }
        });
    }

    function setRating(rating) {
        stars.forEach(star => {
            let starValue = parseInt(star.getAttribute("data-value"));
            if (starValue <= rating) {
                star.classList.add("clicked");
                star.querySelector(".star-fill").setAttribute("fill", "#ffd700");
            } else {
                star.classList.remove("clicked");
                star.querySelector(".star-fill").setAttribute("fill", "#000000");
            }
        });
        document.getElementById("rating").value = rating;
    }
});
