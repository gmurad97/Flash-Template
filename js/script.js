window.onload = () => {
    new WOW().init();
    let pLoader = document.querySelector(".preloader");
    document.body.style.overflow = "visible";
    pLoader.style.opacity = 0;
    pLoader.ontransitionend = () => pLoader.style.zIndex = "-1024";
}

let scrollBtn = document.querySelector(".scroll-up");
let headerNavBar = document.querySelector(".h-navbar");
let headerNavBarLogo = document.querySelector(".h-n-logo>a>img");

scrollBtn.onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollObsrv() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.opacity = "1";
        scrollBtn.ontransitionend = () => scrollBtn.style.zIndex = "1024";
        headerNavBar.style.backgroundColor = "var(--theme-panel-alpha64-color)";
        headerNavBarLogo.style.width = "96px";
    }
    else {
        scrollBtn.style.opacity = "0";
        scrollBtn.ontransitionend = () => scrollBtn.style.zIndex = "-1024";
        headerNavBar.style.backgroundColor = "var(--theme-panel-alpha32-color)";
        headerNavBarLogo.style.width = "111px";
    }
}

window.onscroll = () => {
    scrollObsrv();
}

let faBounceEffectBlocks =
    [
        ...document.querySelectorAll(".m-l-block"),
        ...document.querySelectorAll(".m-price-block"),
        ...document.querySelectorAll(".m-l-counter-block")
    ]

for (let faBounceEffectBlock of faBounceEffectBlocks) {
    faBounceEffectBlock.onmouseover = () => {
        faBounceEffectBlock.querySelector("[class*=\"fa-flash\"]").classList.add("fa-bounce");
    }
    faBounceEffectBlock.onmouseout = () => {
        faBounceEffectBlock.querySelector("[class*=\"fa-flash\"]").classList.remove("fa-bounce");
    }
}

function galleryImgVisible(boolVisibility) {
    let galleryAllImages = document.querySelectorAll("[data-unique-name]");
    if (boolVisibility) {
        for (let gImg of galleryAllImages) {
            gImg.style.transform = `scale(1)`;
            gImg.style.opacity = `1`;
            gImg.style.visibility = `visible`;
            gImg.style.width = `24%`;
            gImg.style.marginLeft = `5px`;
            gImg.style.marginRight = `5px`;
            gImg.style.height = `222px`;
        }
    }
    else {
        for (let gImg of galleryAllImages) {
            gImg.style.transform = `scale(0)`;
            gImg.style.opacity = `0`;
            gImg.style.visibility = `hidden`;
            gImg.style.width = `0`;
            gImg.style.marginLeft = `0`;
            gImg.style.marginRight = `0`;
            gImg.style.height = `0`;
        }
    }
}

function filterImage(uniqueName) {
    let galleryTargetImages = document.querySelectorAll(`[data-unique-name="${uniqueName}"]`);
    if (uniqueName === "all-flesh-img") {
        galleryImgVisible(true);
    }
    else {
        galleryImgVisible(false);
        for (let gImg of galleryTargetImages) {
            gImg.style.transform = `scale(1)`;
            gImg.style.opacity = `1`;
            gImg.style.visibility = `visible`;
            gImg.style.width = `24%`;
            gImg.style.marginLeft = `5px`;
            gImg.style.marginRight = `5px`;
            gImg.style.height = `222px`;
        }
    }
}

let galleryLiMenu = document.querySelectorAll(".m-gallery-control > ul > li")
for (let liMenu of galleryLiMenu) {
    if (liMenu.textContent.toLowerCase() === "all" || liMenu.textContent.toLowerCase() === "ümumi" || liMenu.textContent.toLowerCase() === "все") {
        liMenu.onclick = () => {
            filterImage('all-flesh-img');
        }
    }
    else if (liMenu.textContent.toLowerCase() === "warehouse" || liMenu.textContent.toLowerCase() === "anbar" || liMenu.textContent.toLowerCase() === "склад") {
        liMenu.onclick = () => {
            filterImage('warehouse');
        }
    }
    else if (liMenu.textContent.toLowerCase() === "delivery" || liMenu.textContent.toLowerCase() === "daşınma" || liMenu.textContent.toLowerCase() === "доставка") {
        liMenu.onclick = () => {
            filterImage('delivery');
        }
    }
    else if (liMenu.textContent.toLowerCase() === "partners" || liMenu.textContent.toLowerCase() === "партнеры" || liMenu.textContent.toLowerCase() === "partnyorlar") {
        liMenu.onclick = () => {
            filterImage('partners');
        }
    }
}

const counterStatsElements = document.querySelectorAll("[data-stats-counter]");
const ANIMATION_DURATION = 2048;

function animationCounterStats(element, start, end, animationDuration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const animationProgress = Math.min((timestamp - startTimestamp) / animationDuration, 1);
        element.textContent = Math.floor(animationProgress * (end - start) + start);
        if (animationProgress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = parseInt(end);
        }
    };
    window.requestAnimationFrame(step);
}

let options = {
    threshold: [0]
};

let observer = new IntersectionObserver(entries, options);
observer.observe(document.querySelector(".m-lending-counter"));

function entries(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            counterStatsElements.forEach((element) => {
                const countTo = element.getAttribute('data-stats-counter');
                animationCounterStats(element, 0, countTo, ANIMATION_DURATION);
                observer.disconnect();
            })
        }
    })
}

const galleryAllImages = document.querySelectorAll(".m-gallery-img>img");
const modalContainer = document.querySelector(".modal-container");
const modalImage = document.querySelector(".modal-content>img");
const closeBtnModal = document.querySelector("#modal-img-close-btn");
const prevBtnModal = document.querySelector("#modal-img-left-btn");
const nextBtnModal = document.querySelector("#modal-img-right-btn");

galleryAllImages.forEach(image => {
    image.addEventListener("click", () => {
        const imageUrl = image.getAttribute("src");
        modalImage.setAttribute("src", imageUrl);
        modalContainer.style.zIndex = "1024";
        modalContainer.style.transform = "translate(-50%, -50%) scale(1)";
        modalContainer.ontransitionend = () => {
            modalContainer.style.zIndex = "1024";
        };
    });
});

closeBtnModal.addEventListener("click", () => {
    modalContainer.ontransitionend = () => {
        modalContainer.style.zIndex = "-1024";
    };
    modalContainer.style.transform = "translate(-50%, -50%) scale(0)";
});

nextBtnModal.addEventListener("click", () => {
    const currentImage = modalImage.getAttribute("src");
    let nextImage;
    for (let i = 0; i < galleryAllImages.length; i++) {
        if (galleryAllImages[i].getAttribute("src") === currentImage) {
            if (i === galleryAllImages.length - 1) {
                nextImage = galleryAllImages[0].getAttribute("src");
            } else {
                nextImage = galleryAllImages[i + 1].getAttribute("src");
            }
            break;
        }
    }
    modalImage.setAttribute("src", nextImage);
});

prevBtnModal.addEventListener("click", () => {
    const currentImage = modalImage.getAttribute("src");
    let prevImage;
    for (let i = 0; i < galleryAllImages.length; i++) {
        if (galleryAllImages[i].getAttribute("src") === currentImage) {
            if (i === 0) {
                prevImage = galleryAllImages[galleryAllImages.length - 1].getAttribute("src");
            } else {
                prevImage = galleryAllImages[i - 1].getAttribute("src");
            }
            break;
        }
    }
    modalImage.setAttribute("src", prevImage);
});










