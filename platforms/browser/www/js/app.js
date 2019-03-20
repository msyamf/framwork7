




document.addEventListener("backbutton", onBackKeyDown, false);


// Handle the back button
// function onBackKeyDown(url) {
//   if(url=='/'){
//     navigator.app.exitApp();
//   }else{
//     $$('[class="link back"]').click()
//   }
// }
// function exit(){
//   navigator.app.exitApp();
// }


function onLoad() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

// Cordova is loaded and it is now safe to call Cordova methods
//
function onDeviceReady() {
  // Register the event listener
  document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
//
function onBackKeyDown() {

  if(app.form.getFormData('page')=='/'){
    navigator.app.exitApp();
  }else{
    app.form.storeFormData('page','/');
    $$('[class="link back"]').click()
  }
//app.dialog.alert('Hello World!');
}
// Dom7
var $$ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  pushState : true,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  
  routes: routes,
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  
});

$$(document).on('page:init',function (e) {
  app.form.storeFormData('page',e.detail.router.url);
  console.log(app.form.getFormData('page'))
  console.log(e.detail.router)
})

$$(document).on('page:init', '.page[data-name="p404"]', function (e) {
  //onBackKeyDown(e.detail.router.url);
})