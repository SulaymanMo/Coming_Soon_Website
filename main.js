/* animate left bars menu */
let bars = document.querySelector('header .bars'),
    bar1 = document.querySelector('header .bars .bar1'),
    bar2 = document.querySelector('header .bars .bar2'),
    bar3 = document.querySelector('header .bars .bar3');
function moveBars() {
    bar1.style.width = `13px`;
    bar2.style.width = `100%`;
    bar3.style.width = `13px`;
}
function defBars() {
    bar1.style.width = `100%`;
    bar2.style.width = `13px`;
    bar3.style.width = `100%`;
}
/* showing bars menu */
let txt  = document.querySelector('header .bars .txt');
let menu = document.querySelector('header .bars .bars-menu');
function barsMenu() { 
    txt.classList.toggle('pooftxt');
    menu.classList.toggle('actMenu');
}
 
let pages = document.querySelectorAll('main.page');
let header = document.querySelector('header.fixed-top');
let links = document.querySelectorAll('.bars-menu .link');

window.onscroll = () => {
    if (window.scrollY >= header.clientHeight - 10) {
        header.style.background = `rgba(0, 0, 24, 1)`;
    } else {
        header.style.background = `none`;
    }
}

function clsMenu() {
    let clsMenu = document.querySelector('clsMenu')
    clsMenu.classList.remove('actMenu');
}

links.forEach(a => {
    a.onclick = () => {
        txt.innerHTML = a.innerHTML;
    }
});

// counting
let d = document.querySelector('#d');
let h = document.querySelector('#h');
let m = document.querySelector('#m');
let s = document.querySelector('#s');

let dData = d.getAttribute('d-time');
let hData = h.getAttribute('h-time');
let mData = m.getAttribute('m-time');
let sData = s.getAttribute('s-time');

window.onload = () => {
    // let loader = document.querySelector('.loader');
    // let actLoader = setTimeout(() => {
    //     console.log(loader);
    //     loader.style.display = 'block';
    //     clearTimeout(actLoader);
    // }, 1000);

    d.innerHTML = `${dData}`;
    h.innerHTML = `${hData}`;
    m.innerHTML = `${mData}`;
    s.innerHTML = `${sData}`;

    let interval = setInterval(() => {
        s.innerHTML = sData -= 1;
        if (sData == 0) {
            sData = 60;
            m.innerHTML = mData -= 1;
            if (mData == 0) {
                mData = 60;
                h.innerHTML = hData -= 1;
                if (hData == 0) {
                    hData = 60;
                    d.innerHTML = dData -= 1;
                    if (dData == 0) {
                        s.innerHTML = "00";
                        m.innerHTML = "00";
                        h.innerHTML = "00";
                        d.innerHTML = "00";
                        clearInterval(interval);
                    }
                }
            }
        }
    }, 1000);
}

// x = '0';
// console.log(x);
// console.log(parseInt(x, 10).toFixed(2));

// let page = document.querySelector('#page-2')

// window.onscroll = function () {
//     if (page.clientHeight == page.clientHeight) {
//         window.scrollTo({
//             top: page.clientHeight,
//             behavior: 'smooth'
//         })
//     }
// }
