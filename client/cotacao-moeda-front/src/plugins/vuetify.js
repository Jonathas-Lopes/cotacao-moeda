import Vue from 'vue';
import Vuetify from 'vuetify/lib'


Vue.use(Vuetify);

export default new Vuetify({
    theme: {
       
        dark: false,
      themes: {
        dark: {
      primary:'#795548',
      secondary: '#795548',
      accent: '#795548',
      error: '#795548',
      warning:'#7955486',
      info: '#795548',
      success: '#4caf50'
      },
      light: {
        primary:'#4caf50',
        secondary:'#795548',
        accent:'#ffc107',
        error:'#ff5722',
        warning:'#f44336',
        info: '#03a9f4',
        success:'#4caf50'
        },
      },
    }
  })