document.addEventListener("DOMContentLoaded", function (event) {
    var ipForm = document.getElementById('ipForm');

    ipForm.onsubmit = function (event) {
        event.preventDefault();

        var ip = document.getElementById('ip').value;

        http.get('https://ipapi.co/' + ip + '/json/').then(function (response) {
            var responseEl = document.getElementsByClassName('ip-response')[0];
            var validateButton = document.createElement('BUTTON');
            var postBody = response;

            validateButton.appendChild(document.createTextNode("Validate"));
            responseEl.innerHTML = response;
            responseEl.appendChild(validateButton);

            validateButton.addEventListener('click', function (event) {
                var responseValidateEl = document.getElementsByClassName('response-validate')[0];

                http.post('https://shrouded-garden-94580.herokuapp.com/', postBody).then(function (rsp) {
                    responseValidateEl.innerHTML = rsp;
                })
            })
        });
    }
});