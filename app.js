const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
function circleMouseFollow(scaleX, scaleY) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${scaleX}, ${scaleY})`
    })
}
const firstPageAnim = () => {
    var tl = gsap.timeline()
    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".boundingElem", {
            y: '0',
            duration: 2,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: .2
        })
        .from(".heroFooter", {
            y: '-10',
            delay: -1,
            duration: 1.5,
            opacity: 0,
            ease: Expo.easeInOut,

        })
}
document.querySelectorAll(".elem").forEach((elem)=>{
    var rotate = 0;
    var rotDiff = 0

    elem.addEventListener("mouseleave", (details)=>{

    gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration:.5
        
    })     
})
elem.addEventListener("mousemove", (details)=>{
    var diff = details.clientY - elem.getBoundingClientRect().top;
    rotDiff = details.clientX - rotate;
    rotate = details.clientX

    gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, rotDiff*0.5)
    })     
})
})
var timeOut;
const circleSkew = () => {
    var scaleX = 1
    var scaleY = 1
    var xPrev = 0
    var yPrev = 0
    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeOut)
        scaleX = gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev)
        scaleY = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev)
        xPrev = dets.clientX
        yPrev = dets.clientY
        circleMouseFollow(scaleX, scaleY)
        timeOut = setTimeout(() => {
            document.querySelector(".mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`
        }, 100)
    })
}
circleSkew()
circleMouseFollow()
firstPageAnim()
