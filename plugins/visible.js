export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("visible", {
      mounted(el, binding) {
        el.style.visibility = !!binding.value ? "visible" : "hidden";
      },
    });
  });
  