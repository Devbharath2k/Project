    document.addEventListener("DOMContentLoaded", function () {
        const loadMoreBtn = document.getElementById("loadMoreBtn");
        const loadMoreSection = document.getElementById("loadMoreSection");
        const contentContainer = document.getElementById("content");

        // Additional content
        const additionalContent = [
            `<div class="row mt-4">
            <div class="col-md-4">
                <div class="box rounded-5 ">
                    <img src="./assets/img/hero-bg.jpg">
                    <div class="box-content text-center ">
                        <a href="./Blog-page.html"
                            class=" text-decoration-none text-dark mt-5 fs-5 d-flex justify-content-center mx-5">EDUCATION</a>
                    </div>
                </div>
                <a href="./Blog-page.html" class="text-dark text-decoration-none">Lorem, ipsum dolor sit amet
                    consectetur
                    doloribus?</a>
            </div>
            <div class="col-md-4">
                <div class="box rounded-5 ">
                    <img src="./assets/img/hero-bg.jpg">
                    <div class="box-content text-center ">
                        <a href="./Blog-page.html"
                            class=" text-decoration-none text-dark mt-5 fs-5 d-flex justify-content-center mx-5">EDUCATION</a>
                    </div>
                </div>
                <a href="./Blog-page.html" class="text-dark text-decoration-none">Lorem, ipsum dolor sit amet
                    consectetur
                    doloribus?</a>
            </div>
            <div class="col-md-4">
                <div class="box rounded-5 ">
                    <img src="./assets/img/hero-bg.jpg">
                    <div class="box-content text-center ">
                        <a href="#"
                            class=" text-decoration-none text-dark mt-5 fs-5 d-flex justify-content-center mx-5">EDUCATION</a>
                    </div>
                </div>
                <a href="./Blog-page.html" class="text-dark text-decoration-none">Lorem, ipsum dolor sit amet
                    consectetur
                    doloribus?</a>
            </div>

        </div>`,
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

