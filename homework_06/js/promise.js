    httpGet('api/name').then(function(rsp) {
        // rsp = {name: 'Vova'}
        httpPost('api/city', rsp).then(function (rsp) {
            // rsp = {city: 'Lviv'}
            httpPost('api/country', rsp).then(function (rsp) {
                // rsp = {country: 'Ukraine'}
                httpPost('api/ip', rsp).then(function (rsp) {
                    // rsp = {ip: '93.1.1.1'}
                    console.log(rsp.ip);
                })
            })
        })
    })

    http.get('api/ip/8.8.8.8').then(function(rsp) {
        // rsp = "{
        //     "ip": "93.75.94.136",
        //     "city": "Lviv",
        //     "region": "L'vivs'ka Oblast'",
        //     "region_code": "46",
        //     "country": "UA",
        //     "country_name": "Ukraine",
        //     "continent_code": "EU",
        //     "postal": "79025",
        //     "latitude": 49.8407,
        //     "longitude": 24.0305,
        //     "timezone": "Europe/Kiev",
        //     "utc_offset": "+0300",
        //     "country_calling_code": "+380",
        //     "currency": "UAH",
        //     "languages": "uk,ru-UA,rom,pl,hu",
        //     "asn": "AS25229",
        //     "org": "Volia"
        // }";

       http.post("herocco", rsp).then(function(response){
        console.log();
       }) 

    })
//if statusCode == 200 {sC(data.response)}





































/*

// ----------------------------------------------------- HTML ---------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <script src="js/task1.js"></script>
  <script src="js/task2.js"></script>
  <title>homework_06</title>
</head>

<body>
  <form id="ipForm">

    <div class="form-group">
      <label class="sr-only" for="ip">enter ip address</label>
      <input type="text" class="form-control" id="ip" placeholder="Please enter ip address">
    </div>

    <button type="submit" class="btn btn-primary">Track ip</button>
  </form>

  <div class="ip-response"></div>
  <div class="response-validate"></div>

</body>

</html>

// --------------------------------------------------------------------- js start ------------------------------------------------------


// TASK 1


var http = {
  get: function (url) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };

      xhr.send();
    });
  },
  post: function (url, body) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open('POST', url, true);
      xhr.onload = function () {
        if (this.status == 200) {
          resolve(this.responseText);
        } else {
          var error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };
      xhr.onerror = function () {
        reject(new Error("Network Error"));
      };

      xhr.send(body);
    });
  }
}

// TASK 2


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


// prmise chain
*/ 