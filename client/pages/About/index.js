// horizontal scroll

// const horizontalScroll = document.querySelector(".teamContainer");

// horizontalScroll.addEventListener("wheel", (evt) => {
//   const toLeft = evt.deltaY < 0 && horizontalScroll.scrollLeft > 0;
//   const toRight =
//     evt.deltaY > 0 &&
//     horizontalScroll.scrollLeft <
//       horizontalScroll.scrollWidth - horizontalScroll.clientWidth;

//   if (toLeft || toRight) {
//     evt.preventDefault();
//     horizontalScroll.scrollLeft += 4 * evt.deltaY;
//   }
// });

// for hiding header after scrolling

// let header = document.querySelector("header");

// let scrollPrev = window.pageYOffset;

// window.onscroll = function () {
//   let scrollCur = window.pageYOffset;

//   if (scrollPrev > scrollCur) {
//     header.style.top = "0";
//   } else {
//     header.style.top = "-10vh";
//   }

//   scrollPrev = scrollCur;
// };

