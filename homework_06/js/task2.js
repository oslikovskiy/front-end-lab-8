document.addEventListener("DOMContentLoaded", function (event) {
  var ipForm = document.getElementById('ipForm');

  ipForm.onsubmit = function (event) {
    event.preventDefault();
    var ip = document.getElementById('ip').value;
    var load = document.getElementById('circularG');
    var responseEl = document.getElementsByClassName('ip-response')[0];

    load.style.visibility = "visible";
    responseEl.innerHTML = '';

    http.get('https://ipapi.co/' + ip + '/json/').then(function (response) {
      var validateButton = document.createElement('button');
      var postBody = response;

      load.style.visibility = "hidden";

      validateButton.appendChild(document.createTextNode("Validate"));
      responseEl.innerHTML = response;
      responseEl.appendChild(validateButton);

      validateButton.className = "valid btn btn-primary";

      validateButton.addEventListener('click', function (event) {
        var responseValidateEl = document.getElementsByClassName('response-validate')[0];
        load.style.visibility = "visible";
        responseEl.innerHTML = '';

        http.post('https://shrouded-garden-94580.herokuapp.com/', postBody).then(function (rsp) {
          responseValidateEl.innerHTML = rsp;
          load.style.visibility = "hidden";
        })
      })
    });
  }
});