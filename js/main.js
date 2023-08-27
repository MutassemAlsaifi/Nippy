let scroller = document.querySelector(".scroller")
let nav = document.querySelector("header nav")
let links = document.querySelectorAll("header nav a")
let icon_bar = document.querySelector("main.main-section header div.contanir .fa-bars")
let About_Us_Section = document.querySelector("section.About-us")
let sectionOurProducts = document.querySelector("section.OurProducts")
let section_Subscribe = document.querySelector("section.Subscribe")
let divImg = document.querySelector("section.Subscribe .divimg")
let Subscribe_contant = document.querySelector("section.Subscribe .contant")
let AbutUs_img = document.querySelector("section.About-us .contanir .AbutUs-img ")
let AbutUs_contant = document.querySelector("section.About-us .contanir .contant ")
let imgs_product = document.querySelectorAll(".OurProducts .contanir .imgs .box")
let section_associate = document.querySelector("section.associate")
let footer = document.querySelector("footer.contact")
let associate_img_odd = document.querySelectorAll("section.associate div.contanir :nth-child(odd)")
let associate_img_even = document.querySelectorAll("section.associate div.contanir :nth-child(even)")
console.log(associate_img_odd);
let statistics_section = document.querySelector("section.statistics")
let timers = document.querySelectorAll("section.statistics h4")
let hight = document.documentElement.scrollHeight - innerHeight
let start = false;

icon_bar.addEventListener("click",_=>{
    nav.classList.toggle("change_nav")
})
for (const iterator of links) {
    iterator.addEventListener("click" , _=>{
        nav.classList.remove("change_nav")

    })
}
document.addEventListener("scroll",
    _ => {
        let scrollTop = document.documentElement.scrollTop
        scroller.style.width = `${(scrollTop / hight) * 100}%`
    }
)

window.addEventListener("scroll",
    _ => {
        let offsetAbout_Us_Section = About_Us_Section.offsetTop
        if (window.scrollY >= offsetAbout_Us_Section - 400) {
            About_Us_Section.style.opacity = "1"
            AbutUs_img.classList.remove("transformX")
            AbutUs_contant.classList.remove("transform_X")
        }
        let offsetProduct = sectionOurProducts.offsetTop
        if (window.scrollY >= offsetProduct - 500) {
            sectionOurProducts.style.opacity = "1"
            for (let iterator of imgs_product) {
                iterator.classList.add("rotate")
            }
        }
        let statistics_section_offset = statistics_section.offsetTop
        if (window.scrollY >= statistics_section_offset - 200) {
            statistics_section.style.opacity = "1"
            if (!start)
                for (let iterator of timers) {
                    let counter = iterator.getAttribute("timer")
                    setInterval(change, 100, iterator, counter)

                }
            start = false
        }

        let section_Subscribeoffset = section_Subscribe.offsetTop
        if (window.scrollY >= section_Subscribeoffset - 400) {
            section_Subscribe.style.opacity = "1"
            divImg.classList.remove("transform_X")
            Subscribe_contant.classList.remove("transformX")
        }
        let section_associateoffset = section_associate.offsetTop
        if (window.scrollY >= section_associateoffset - 400) {
            section_associate.style.opacity = "1"
            for (let iterator of associate_img_odd) {

                iterator.classList.remove("transformYbuttom")
            }
            for (let iterator of associate_img_even) {

                iterator.classList.remove("transformYTop")
            }

        }
        let footeroffser = footer.offsetTop
        if (window.scrollY >= footeroffser - 500) {
            footer.style.opacity = "1"

        }
    }
)
let x = 0

let change = function (item, counter) {

    if (x < counter) {

        item.innerText = `${x++}`
    }
}
