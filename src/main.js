import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyBLuc0x0vfnhZaszjId7pD2xmAwKrOuJr4',
    authDomain: 'wheres-waldo-90a10.firebaseapp.com',
    databaseURL: 'https://wheres-waldo-90a10.firebaseio.com',
    projectId: 'wheres-waldo-90a10',
    storageBucket: 'wheres-waldo-90a10.appspot.com',
    messagingSenderId: '805816168680',
    appId: '1:805816168680:web:58ef38b05ec525d79a195d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.prototype.$firebase = firebase;
Vue.config.productionTip = false;

new Vue({
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
