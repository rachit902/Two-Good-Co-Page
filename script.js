
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    smoothMobile: true,  // Enables smooth scrolling on mobile
    multiplier: 1,  // Default scroll speed for desktop
    smartphone: {
        smooth: true,  // Ensures smooth scrolling is enabled on smartphones
        multiplier: 5.5  // Increase this number to speed up the scroll on mobile
    },
});

gsap.registerPlugin(ScrollTrigger);

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

function video_container_animat() {
    const videocont = document.querySelector(".video-cont")
    const play = document.querySelector(".play")
    videocont.addEventListener("mouseenter", () => {
        gsap.to(play, {
            opacity: 1,
            duration: 0.3,
            scale: 1,
        })
    })
    videocont.addEventListener("mouseleave", () => {
        gsap.to(play, {
            opacity: 0,
            duration: 0.3,
            scale: 0,
        })
    })
    videocont.addEventListener("mousemove", (dets) => {
        let rect = videocont.getBoundingClientRect();
        let x = dets.clientX - rect.left;
        let y = dets.clientY - rect.top;

        gsap.to(play, {
            top: y - 66,
            left: x - 65,
            duration: 0.8,
            ease: "Power3.inout",
        })
    });

}

function loadinganimation() {
    const heading = document.querySelectorAll(".heading")
    const video = document.querySelector(".video-cont video")
    const navbar = document.querySelector(".nav")
    var tl = gsap.timeline()
    tl.to(navbar, {
        transform: `translateY(0%)`,
        duration: .5,
        opacity: 1,
        ease: Expo.easeInout
    })
    tl.to(heading, {
        y: 0,
        duration: .6,
        opacity: 1,
        stagger: 0.25,
        ease: "power2.out"

    })
    tl.to(video, {
        scale: 1,
        opacity: 1,
        delay: -.4,
        duration: .6,
        ease: "power2.out"
    })
}

function page2_anime() {
    var elem = document.querySelectorAll(".elem");
    var page2 = document.querySelectorAll(".page2");

    gsap.to(elem, {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "bounce.Inout",
        scrollTrigger: {
            trigger: page2,
            scroller: ".main",
            markers: false,
            start: "top 60%",
        }
    })
}

function respon_play_btn_anime() {
    var play = document.querySelector(".play")
    gsap.to(play, {
        transform: "translate(-50%, -50%)", 
        opacity: 1,       
        delay: 1,
        duration: 0.6,
        ease: "back.out(1)",
    })
}

function respon_page2_anime() {
    const elem = document.querySelectorAll(".elem");
    const page2 = document.querySelectorAll(".page2");

    gsap.to(elem, {
        scale: 1,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: page2,
            scroller: ".main",
            markers: false,
            start: "top 15%",
        }
    })
}

function color_circle_anime() {
    const images = document.querySelectorAll(".child")
    images.forEach((elem) => {
        elem.addEventListener("mouseenter", () => {
            gsap.to(elem.firstElementChild, {
                opacity: .3,
                display: "block",
                duration: 0.3,
                transform: `translate(-50%,-50%) scale(1)`,
            })
        })
        elem.addEventListener("mousemove", (dets) => {
            const rect = elem.getBoundingClientRect()
            const x = dets.clientX - rect.left;
            const y = dets.clientY - rect.top;
            gsap.to(elem.firstElementChild, {
                top: y,
                left: x,
                duration: 0.9,
                ease: "Power3.inout",
            })
            elem.addEventListener("mouseleave", () => {
                gsap.to(elem.firstElementChild, {
                    opacity: 0,
                    duration: 0.3,
                    transform: `translate(-50%,-50%) scale(0)`,
                })
            })
        })
    })
}

function page4_anime() {
    const child = document.querySelectorAll(".child");
    let row1 = [child[0], child[1]];
    let row2 = [child[2], child[3]];
    gsap.to(row1, {
        transform: `translateY(0%)`,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: child[1],
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    })
    gsap.to(row2, {
        transform: `translateY(0%)`,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(5)",
        scrollTrigger: {
            trigger: child[3],
            scroller: ".main",
            markers: false,
            start: "top 80%",
        }
    })
}

function nav_logo_anime() {
    const navlogo = document.querySelectorAll(".nav-partone svg");
    // console.log(navlogo)
    gsap.to(navlogo, {
        transform: `translateY(-130%)`,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            markers: false,
            start: "top -5%",
            end: "top -5%",
            scrub: 0.1
        }
    })
    gsap.to(".links", {
        transform: `translateY(-130%)`,
        opacity: 0,
        scrollTrigger: {
            trigger: ".page1",
            scroller: ".main",
            markers: false,
            start: "top -5%",
            end: "top -10%",
            scrub: true
        }

    })
}

function menu_bar_animation() {

    const fullscreen = document.querySelector(".full-scr");
    const icons = document.querySelector(".icons");
    let flag = 0;
    let menutl = gsap.timeline({ paused: true });


    menutl.to(fullscreen, {
        top: 0,
        duration: 0.4,
        ease: "Power1.easeinOut"
    });
    menutl.from(".list a", {
        y: 90,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: "back.out(1)"

    });
    menutl.from(".social-handles h1,.so-icons", {
        y: 90,
        opacity: 0,
        duration: 0.6,
        // delay:-1,
        stagger: 0.09,
        ease: "back.out(1)"
    }, "-=1");


    document.querySelector('.hamburger-menu').addEventListener('click', function () {
        if (flag === 0) {
            gsap.to(icons, {
                background: "none",
                borderRadius: "0%"
            });
            this.classList.toggle('active');
            menutl.play();
            flag = 1;
        } else {
            gsap.to(icons, {
                background: "",
                borderRadius: "",
                delay: 1.25
            });
            this.classList.toggle('active');
            menutl.reverse();
            flag = 0;
        }
    });

}

function hoveranimaton() {
    const links = document.querySelectorAll(".list a")
    console.log(links)
    const soicons = document.querySelectorAll(".so-icons")
    links.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            gsap.to(e, {
                color: "white",
                webkitTextStroke: "3px black",
                duration: 0.5,
                ease: "power2.out"  // Use lowercase for ease
            });
        });

        e.addEventListener("mouseleave", () => {
            gsap.to(e, {
                color: "",  // Resets color back to its original state
                webkitTextStroke: "",  // Removes the stroke
                duration: 0.5,
                ease: "power2.out"  // Use lowercase for ease
            });
        });
    });
    soicons.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            gsap.to(e, {
                color: "white",
                duration: 0.5,
                ease: "power2.out"  // Use lowercase for ease
            });
        });

        e.addEventListener("mouseleave", () => {
            gsap.to(e, {
                color: "",  // Resets color back to its original state
                duration: 0.5,
                ease: "power2.out"  // Use lowercase for ease
            });
        });
    });
}

function checkScreenWidth() {
    const width = window.innerWidth;

    if (width > 600) {
        video_container_animat();
        page2_anime();
        color_circle_anime();
    } else {
        respon_play_btn_anime();
        respon_page2_anime();
    }
}

function underline_animat() {

    gsap.to(".msg,.email", {
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    });

    gsap.to(".para1,.para2", {
        transform: "translateX(0%)",
        duration: 1,
        ease: "back.out(1)",
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    });

    gsap.to(".emailh1", {
        transform: "translateX(0%)",
        duration: 1,
        ease: "back.out(0.3)",
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    });

    gsap.to(".ri-arrow-right-line", {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".footer",
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    });
}
function footer_list_animat() {
    gsap.to(".logo", {
        opacity: 1,
        y: 10,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".footer-list",
            scroller: ".main",
            markers: false,
            start: "top 70%",
        }
    });
    gsap.to(".list1 a , .list2 a, #item-links, #connect-links", {
        transform: "translateY(0%)",
        duration: 1,
        ease: "back.out(1)",
        scrollTrigger: {
            trigger: ".footer-list",
            scroller: ".main",
            markers: false,
            start: "top 40%",
        }
    });

}

checkScreenWidth();
page4_anime();
footer_list_animat();
underline_animat()
loadinganimation();
nav_logo_anime();
menu_bar_animation();
hoveranimaton();

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();