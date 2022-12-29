import amplitude from 'amplitude-js';

export default defineNuxtPlugin(nuxtapp => {
  nuxtapp.vueApp.amplitude = amplitude;
});
