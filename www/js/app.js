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
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
}); 
//app.form.storeFormData('exit',false);  

 

app.form.storeFormData('exit',false);
document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);

function onDeviceReady() {
  document.addEventListener("backbutton", onBackKeyDown, false); 
  StatusBar.overlaysWebView(false);
  StatusBar.backgroundColorByHexString("#0039cb");
  StatusBar.styleLightContent();

}

   


// Handle the back button
function onBackKeyDown() {
  cekpopup = (app.popup.get()) ? app.popup.get().opened : false;
  if(cekpopup){
    app.popup.close();
  }else{
    if(app.views.main.router.currentRoute.url == "/"&&app.form.getFormData('exit')==false){
        app.form.storeFormData('exit',true)
        app.dialog.confirm('Yakin ingin Keluar ?','Keluar. . .', function () {
        navigator.app.exitApp();
      },function () {
        app.form.storeFormData('exit',false)
      });
    }else{
      app.views.main.router.back()
    } 
  } 
}