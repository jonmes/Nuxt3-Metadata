export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("visible", {
    mounted(el, binding) {
      console.log('this shit work');
      el.style.visibility = !!binding.value ? "visible" : "hidden";
    },
  });
});
