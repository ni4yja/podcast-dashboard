export default {
  slideLeft: {
    name: "slide-left",
    css: false,
    enter(el) {
      this.$gsap.from(".menu-link .line", {
        duration: 1,
        width: "calc(100% + 68px)",
        left: "-68px",
      });
    },
  },
  slideRight: {
    name: "slide-right",
    css: false,
    enter(el) {
      this.$gsap.from(".menu-link .line", {
        duration: 1,
        width: "calc(100% + 68px)",
        right: "-68px",
      });
    },
  }
}