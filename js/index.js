$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                        <th scope="row">${no}</th>
                        <td>
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            no++;

        }

    });
    $(function () {
        var url = "https://pomber.github.io/covid19/timeseries.json";
        $.getJSON(url, function (result) {
            console.log(result);
            var confirmed =0;
            var recovered =0;
            var deaths =0;
            for (var country in result) {
                var selectedCountry = result[country];
                var total = selectedCountry.length;
                confirmed = confirmed + selectedCountry[total - 1].confirmed;
                recovered = recovered + selectedCountry[total - 1].recovered;
                deaths = deaths + selectedCountry[total - 1].deaths;
            }
            console.log(confirmed,recovered,deaths);
            $("#confirmed").append(confirmed);
            $("#recovered").append(recovered);
            $("#deaths").append(deaths);
            
        });
    });





})
