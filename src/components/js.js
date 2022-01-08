export function windowScroll() {
  window.onscroll = function () {
    scrollFunction();
  };
}

export function scrollFunction() {
  const header = document.querySelector('header');
  if (header) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector('header').classList.add('sticky');
    } else {
      document.querySelector('header').classList.remove('sticky');
    }
  }
}
