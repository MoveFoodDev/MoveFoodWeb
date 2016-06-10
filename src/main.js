import Vue from 'vue'
import App from './App'
import config from '../config';

var firebaseMixin = require('vue-firebase-mixin');

/* eslint-disable no-undef */
var ref = new Firebase(config.firebase);

/* eslint-disable no-new */
var app = new Vue({
  mixins: [ firebaseMixin ],
  components: { App },
  fb: {
    arrays: [
      ref.child('people').orderBy('age').limitToLast(3)
    ],
    values: [
      ref.child('status'),
      ref.child('name')
    ]
  }

})

app.$mount('body');
