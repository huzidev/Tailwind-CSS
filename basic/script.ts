const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const userTheme = localStorage.getItem("theme");

const themeCheck = () => {
    if (userTheme === "dark") {
        document.documentElement.classList.add("dark")
        sunIcon!.classList.add("hidden");
        moonIcon!.classList.remove("hidden");
    } else {
        document.documentElement.classList.remove("dark")
        moonIcon!.classList.add("hidden");
        sunIcon!.classList.remove("hidden");
    }
};

function themeSwitch() {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        moonIcon!.classList.add("hidden");
        sunIcon!.classList.remove("hidden");
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add("dark");
        sunIcon!.classList.add("hidden");
        moonIcon!.classList.remove("hidden");
        localStorage.setItem('theme', 'dark');
    }
}

// const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;


sunIcon!.addEventListener("click", () => {
    themeSwitch();
});

moonIcon!.addEventListener("click", () => {
    themeSwitch();
});

themeCheck();