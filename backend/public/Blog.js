document.addEventListener("DOMContentLoaded", function () {
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const loadMoreSection = document.getElementById("loadMoreSection");
    const contentContainer = document.getElementById("content");

    // Additional content
    const additionalContent = [
        `<div i class="row align-items-center justify-content-center">
            <div class="col-md-4 rounded-5">
        <div class="border-0">
            <div class="blogCards row align-items-center justify-content-center rounded-5">
                <div class="face face1 col-lg-4">
                    <div class="content">
                        <div class="icon">
                            <img src="./assets/img/Blog/primary.png" class="" alt="">
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <a href="#" class="text-decoration-none ">
                            <h3 class="text-center
                                  text-primary">
                                EDUCATION
                            </h3>
                            <a href="./Blog-page.html" class="fw-normal text-dark text-decoration-none text-center">How to design a
                                simple, yet unique
                                and memorable brand
                                identity</a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 rounded-5">
        <div class="border-0">
            <div class="blogCards row align-items-center justify-content-center rounded-5">
                <div class="face face1 col-lg-4">
                    <div class="content">
                        <div class="icon">
                            <img src="./assets/img/Blog/gym.png" class="" alt="">
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <a href="#" class="text-decoration-none ">
                            <h3 class="text-center
                                  text-primary">
                                EDUCATION
                            </h3>
                            <a href="./Blog-page.html" class="fw-normal text-dark text-decoration-none text-center">How to design a
                                simple, yet unique
                                and memorable brand
                                identity</a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-4 rounded-5">
        <div class="border-0">
            <div class="blogCards row align-items-center justify-content-center rounded-5">
                <div class="face face1 col-lg-4">
                    <div class="content">
                        <div class="icon">
                            <img src="./assets/img/Blog/gym 1.png" class="" alt="">
                        </div>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <a href="#" class="text-decoration-none ">
                            <h3 class="text-center
                                  text-primary">
                                EDUCATION
                            </h3>
                            <a href="./Blog-page.html" class="fw-normal text-dark text-decoration-none text-center">How to design a
                                simple, yet unique
                                and memorable brand
                                identity</a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
        <div/>`,
        // Add more content here
    ];

    let currentContentIndex = 0;
    const itemsToShow = 2;

    const showMoreContent = () => {
        for (let i = 0; i < itemsToShow; i++) {
            if (currentContentIndex < additionalContent.length) {
                const content = additionalContent[currentContentIndex];
                const contentElement = document.createElement("div");
                contentElement.innerHTML = content;
                loadMoreSection.appendChild(contentElement);
                currentContentIndex++;
            } else {
                loadMoreBtn.style.display = "none"; // Hide button when all content is loaded
                break;
            }
        }
    };

    loadMoreBtn.addEventListener("click", showMoreContent);
});