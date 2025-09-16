if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/Florescence-v-2.0/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}
