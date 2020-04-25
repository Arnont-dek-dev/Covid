$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

 

    var url = "https://pomber.github.io/covid19/timeseries.json";
    

    $.getJSON(url, function(result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].deaths}</td>
            <td>${selectedCountry[i].recovered}</td>
          </tr>`

            
          $("#data").append(row) ;

        }

    });
    $(function () {
        var url = "https://pomber.github.io/covid19/timeseries.json";
        $.getJSON(url, function (result) {
            console.log(result);
            var no = 1;
            var confirmed = 0;
            var recovered = 0;
            var deaths = 0;
            for (var country in result) {
                var selectedCountry = result[country];
                var total = selectedCountry.length;
                confirmed = confirmed + selectedCountry[total - 1].confirmed;
                recovered = recovered + selectedCountry[total - 1].recovered;
                deaths = deaths + selectedCountry[total - 1].deaths;
            }
            console.log(confirmed);
            $("#confirmed").append(confirmed);
            $("#recovered").append(recovered);
            $("#deaths").append(deaths);

        });
    });

})
