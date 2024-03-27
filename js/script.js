const {createApp} = Vue;

createApp({
    data() {
        return {
            message: 'Hello World!',
            image: 'img/logo.png',
            altimg: 'logo image'
        }
    }
}).mount('#app');