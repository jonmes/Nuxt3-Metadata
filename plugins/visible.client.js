export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("focus", {
    mounted(el, binding) {
      el.style.visibility = !!binding.value ? "visible" : "hidden";
    },
  });
});
