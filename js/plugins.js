// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
// The Browser API key obtained from the Google API Console.
    // Replace with your own Browser API key, or your own key.
    var developerKey = 'AIzaSyC86Z-BbOuO-BGI2CvMmUHO3iR0FB02eXw';

    // The Client ID obtained from the Google API Console. Replace with your own Client ID.
    var clientId = "344473574277-i16ved7bkg1mu58focj6igl8p221fcm2.apps.googleusercontent.com"

    // Scope to use to access user's photos.
      var scope = [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/photos',
        'https://www.googleapis.com/auth/youtube'
      ];
      var authApiLoaded = false;
      var pickerApiLoaded = false;
      var oauthToken;
      var viewIdForhandleAuthResult;
      // Use the API Loader script to load google.picker and gapi.auth.
      function onApiLoad() {
        gapi.load('auth', {'callback': onAuthApiLoad});
        gapi.load('picker', {'callback': onPickerApiLoad});
      }
      function onAuthApiLoad() {
        authApiLoaded = true;
      }
      function onPickerApiLoad() {
        pickerApiLoaded = true;
      }
      function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
          oauthToken = authResult.access_token;
          createPicker(viewIdForhandleAuthResult, true);
        }
      }
      // Create and render a Picker object for picking user Photos.
      function createPicker(viewId, setOAuthToken) {
        if (authApiLoaded && pickerApiLoaded) {
          var picker;
          
          if(authApiLoaded && oauthToken && setOAuthToken) {
            picker = new google.picker.PickerBuilder().
              addView(viewId).
              setOAuthToken(oauthToken).
              setDeveloperKey(developerKey).
              setCallback(pickerCallback).
              build();
          } else {
            picker = new google.picker.PickerBuilder().
              addView(viewId).
              setDeveloperKey(developerKey).
              setCallback(pickerCallback).
              build();
          }
          
          picker.setVisible(true);
        }
      }
      // A simple callback implementation.
      function pickerCallback(data) {
        var url = 'nothing';
        if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
          var doc = JSON.stringify(data[google.picker.Response.DOCUMENTS][0], null, "  ");
        }
        var message = 'You picked: <br>' + doc;
        document.getElementById('result').innerHTML = message;
      }


    