const shareBlog = `
<div class="share border py-3 border-start-0 border-end-0 border-success">
<div class="container">
        <div class="d-flex justify-content-between align-items-center text-dark">
            <h1 class="primary-color fs-3 m-0 text-dark pe-5">Share This Post</h1>
            <div>
                <a href="https://www.facebook.com/atitchennai/" target="_blank" class="share-ico text-decoration-none mx-2 fs-4 text-dark">
                    <i class="bi bi-facebook" style="color: #186484;"></i>
                </a>
                <a href="https://www.instagram.com/atitchennai/" target="_blank" class="share-ico text-decoration-none mx-2 fs-4 text-dark">
                    <i class="bi bi-instagram" style="color: #d42e2e;"></i>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B917845721438&text&app_absent=0" target="_blank" class="share-ico text-decoration-none mx-2 fs-4 text-success">
                    <i class="bi bi-whatsapp" ></i>
                </a>
            </div>
        </div>
</div>
</div>
`

    var shareblogElement = document.getElementById("share-blog");
    if (shareblogElement) {
        shareblogElement.innerHTML = shareBlog;
        // AOS.init();
    }