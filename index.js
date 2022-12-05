console.log("Hustler 001 : Never Stop , Just keep moving forward");
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".navan", { opacity: 0 }, { opacity: 1, duration: 1 },"-=1");
tl.fromTo(".hercules", { opacity: 0}, { opacity: 1, duration: 1 },"-=0.5");

tl.fromTo(".hercules", {x:"-100%"},{x:"0%",duration:1},"-=1.5");
tl.fromTo(".herculesimg",{ opacity: 0 }, { opacity: 1, duration: 1},"-=1.75");

tl.fromTo(".hercules2", { opacity: 0 }, { opacity: 1, duration: 1},"-=0.75");

tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");


function scrolldiv() {
    let elem = document.getElementById("soldOut");
    elem.scrollIntoView();
}

function scrolldiv1() {
    let elem = document.getElementById("newrelaese");
    elem.scrollIntoView();
}