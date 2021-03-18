"use strict";

  
// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', (response) => {
        $('#fortune-text').html(response);
    });

    // $('#get-fortune-button').on('click', () => {
    //     showFortune()
    // }
    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    //get user input from a form
    //name attribute in html: refers to the element
    //id attribute is identification of each element
    let formData = {"zipcode": $("#zipcode-field").val()};
    // url: app.rout formData: userinpuit(html), response: weather() and what it returns
    $.get(url, formData, (response) => {
        $('#weather-info').html(response.forecast);
    });



    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
// ******  things we worked on
// function updateMelons(results) {
//     if (results.code === "OK") {
//         $('#order-status').html("<p>" + results.msg + "</p>");
//     }
//     else {
//         $('#order-status').addClass("order-error");
//         $('#order-status').html("<p><b>" + results.msg + "</b></p>");
//     }
// }

// function orderMelons(evt) {
//     evt.preventDefault();
//     //turns a form into a pojo (Javascript object)
//     let formInputs = {
//         'qty': $('#qty-field').val(),
//         'melon-type': $('#melon-type-field').val()
//     };

// //$.post(url, data, successFunction)
//     $.post('/order-melons.json', formInputs, updateMelons);
//     }

//     // $('#order-status).html(response.result_code);

//     // TODO: show the result message after your form
//     // TODO: if the result code is ERROR, make it show up in red (see our CSS!)



// $("#order-form").on('submit', orderMelons);
// ******  things we worked on

function updateMelons(results) {
    if (results.code === "OK") {
        $('#order-status').html("<p>" + results.msg + "</p>");
    }
    else {
        $('#order-status').addClass("order-error");
        $('#order-status').html("<p><b>" + results.msg + "</b></p>");
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json", formInputs, updateMelons);
}

$("#order-form").on('submit', orderMelons);