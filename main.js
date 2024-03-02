
var typed = new Typed(".typed_text", {
    strings: ["Full-Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// let header = document.querySelector("header");
// console.log(header.innerHTML);

// let imgsUrl = ['https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg', 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg']
// let count = 0;
// setInterval(function () {
//     header.style.backgroundImage = "url(" + imgsUrl[count] + ")";
//     header.style.backgroundSize = "cover";
//     if (count == 0) {
//         count++;
//     } else {
//         count--;
//     }
// }, 2000)


// let mainImg = document.getElementById("main_img");
// let mainImgCounter = 0;
// setInterval(() => {
//     if (mainImgCounter == 0) {
//         mainImg.style = "filter: drop-shadow(5px 0px 20px rgb(0, 0, 0));"
//         mainImg.style = "transform: translateY(20px)";
//         mainImgCounter++;
//     } else {
//         mainImg.style = "filter: none"
//         mainImg.style = "transform: translateY(-20px)";
//         mainImgCounter--;
//     }
// }, 1000)

let sun = document.getElementById("sun");
sun.style.display = "none";
let moon = document.getElementById("moon");
let header = document.querySelector("header");
let main_title_main = document.querySelector(".main_title_main");
let link = document.querySelectorAll(".nav-link");
let mainText = document.getElementById("main_text");
moon.addEventListener("click", () => {
    sun.style.display = "block";
    header.style.backgroundColor = "black";
    moon.style.display = "none";
    main_title_main.style.color = "white";
    link.forEach(el => {
        el.style.color = "white";
    })
    mainText.style.color = "white";
})

sun.addEventListener("click", () => {
    moon.style.display = "block";
    sun.style.display = "none";
    header.style.backgroundColor = " rgba(237, 236, 236, 0.853)";
    main_title_main.style.color = "black";
    link.forEach(el => {
        el.style.color = "black";
    })
    mainText.style.color = "black";
})

let upp = document.getElementById("upp");
let navbar = document.querySelector(".navbar");
let observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio) {
            console.log("upp");
            upp.style.display = "none";
        } else {
            upp.style.display = "block";
        }
    })
})

observe.observe(navbar);

let navbarLink = [
    {
        navList: ["Home", "About", "Skills", "Portfolio", "Contact"]
    },
    {
        navList: ["Uy", "Haqida", "Qobiliyatlar", "Portfel", "Kontakt"]
    }
]


let main_title = [
    {
        main_title_main: "Hi! My name is G'ayratjon.",
        main_text: "I’m working on myself and I’ve achieved a lot as a result. If I feel something is wrong with me, try to fix it. My interest in programming comes first among my hobbies. I also love reading a lot of books and playing a lot of fun team",
        btn1: "Hire Me",
        btn2: "Download CV"
    },
    {
        main_title_main: "Salom!Men G'ayratjon.",
        main_text: "Men o'z ustimda ishlayapman va natijada ko'p narsaga erishdim. Agar menda biror narsa noto'g'ri ekanligini his qilsam, uni tuzatishga harakat qiling. Mening sevimli mashg'ulotlarim orasida dasturlashga qiziqishim birinchi o'rinda turadi. Men ham ko'p kitob o'qishni va juda qiziqarli jamoada o'ynashni yaxshi ko'raman",
        btn1: "Meni ishga oling",
        btn2: "CV yuklash"
    }
]

let AboutMe = [
    {
        title: "About Me",
        title_text: "I’m working on myself and I’ve achieved a lot as a result. If I feel something is wrong with me, try to fix it. My interest in programming comes first among my hobbies. I also love reading a lot of books and playing a lot of fun team games",
        wasBorn: "I was born in Olmos Village to a businessman family.",
        about: ["Brithday:"," 7 August 2003", "Website: www.example.com", "Phone:"," +99833 180 72 80", "Age:", "Degree:"," Strong junior", "City:"," Tashkent, Uzbekistan", "Gmail:"," gayratjonmirzamahmudov@gmail.com", "Because of my interest in computer science at school, I took computer classes. In 2019, I was admitted to the Tashkent University of Information Technologies and began to study programming in depth. I started frontend programming in December 2019"]
    },
    {
        title: "Men Haqimda",
        title_text: "Men o'z ustimda ishlayapman va natijada ko'p narsaga erishdim. Agar menda biror narsa noto'g'ri ekanligini his qilsam, uni tuzatishga harakat qiling. Mening sevimli mashg'ulotlarim orasida dasturlashga qiziqishim birinchi o'rinda turadi. Men ham ko'p kitob o'qishni va ko'plab qiziqarli jamoaviy o'yinlarni o'ynashni yaxshi ko'raman",
        wasBorn: "Men Olmos qishlog‘ida tadbirkor oilasida tug‘ilganman.",
        about: ["Tug'ilgan sana: ", "7 Avgust 2003", "Website: www.example.com", "Tel: ", "+99833 180 72 80", "Yosh: ", "Daraja:", "Strong junior", "Shahar:", "Tashkent, Uzbekistan", "Email:", "gayratjonmirzamahmudov@gmail.com", "Maktabda informatika faniga qiziqqanim uchun kompyuter darslarida qatnashardim. 2019-yilda Toshkent axborot texnologiyalari universitetiga o‘qishga qabul qilindim va dasturlash yo‘nalishini chuqur o‘rgana boshladim. Men 2019 yil dekabr oyida frontend dasturlashni boshladim"]

    }
]



let lang = document.getElementById("lang");
let navMenu = document.getElementById("nav_menu");
let main_title_mainE = document.querySelector(".main_title_main");
let main_textE = document.querySelector("#main_text");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

let was_born = document.getElementById("was_born");
let title_text = document.getElementById("about_title_text");
let aboutTitle = document.getElementById("about_title");

let aboutBrithday = document.getElementById("about_br");
let aboutPh = document.getElementById("about_ph");
let aboutAge = document.getElementById("about_age");
let aboutDag = document.getElementById("about_dag");
let aboutCity = document.getElementById("about_city");

let about_footer = document.getElementById("about_footer");
lang.addEventListener("click", () => {
    if (lang.value == "uzb") {
        for (let i = 0; i < navbarLink[1].navList.length; i++) {
            navMenu.children[i].children[0].innerHTML = navbarLink[1].navList[i];
        }
        main_title_mainE.innerHTML = main_title[1].main_title_main + "<br />";
        main_textE.innerHTML = main_title[1].main_text;
        btn1.innerHTML = main_title[1].btn1;
        btn2.innerHTML = main_title[1].btn2;

        aboutTitle.innerHTML = AboutMe[1].title;
        was_born.innerHTML = AboutMe[1].wasBorn;
        title_text.innerHTML = AboutMe[1].title_text;

        aboutBrithday.innerHTML = AboutMe[1].about[0];
        aboutBrithday.nextElementSibling.innerHTML = AboutMe[1].about[1];

        aboutPh.innerHTML = AboutMe[1].about[3];
        aboutAge.innerHTML = AboutMe[1].about[5];
        aboutDag.innerHTML = AboutMe[1].about[6];
        aboutDag.nextElementSibling.innerHTML = AboutMe[1].about[7];

        aboutCity.innerHTML = AboutMe[1].about[8];

        about_footer.innerHTML = AboutMe[1].about[12];

    } else {
        for (let i = 0; i < navbarLink[0].navList.length; i++) {
            navMenu.children[i].children[0].innerHTML = navbarLink[0].navList[i];
        }
        main_title_mainE.innerHTML = main_title[0].main_title_main + "<br />";
        main_textE.innerHTML = main_title[0].main_text;
        btn1.innerHTML = main_title[0].btn1;
        btn2.innerHTML = main_title[0].btn2;

        aboutTitle.innerHTML = AboutMe[0].title;
        was_born.innerHTML = AboutMe[0].wasBorn;
        title_text.innerHTML = AboutMe[0].title_text;

        aboutBrithday.innerHTML = AboutMe[0].about[0];
        aboutBrithday.nextElementSibling.innerHTML = AboutMe[1].about[1];

        aboutPh.innerHTML = AboutMe[0].about[3];
        aboutAge.innerHTML = AboutMe[0].about[5];
        aboutDag.innerHTML = AboutMe[0].about[6];
        aboutDag.nextElementSibling.innerHTML = AboutMe[1].about[7];

        aboutCity.innerHTML = AboutMe[0].about[8];

        about_footer.innerHTML = AboutMe[0].about[12];
    }
}
)



