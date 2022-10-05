const formJS = document.querySelectorAll("form")[0];
// const formJquery =  jQuery("from"); // query selectorAll gibi çoklu seçime imkan tanıyor.
//JQUERY === $  dolar işareti kullanılır
//const formJquery = jQuery("form").eq(0);
const formJquery = $("form").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);


//console.log(formJS);
//console.log(formJquery);
//console.log(inputJQ);


// get(index), eq(index) Jquery' nin index alma yöntemi. daha çok elementq kullanılıyor.
// get(index) ==> toArray(get())  get ile array'e çeviriyor.

//load VS DOMContentLoaded  
// DOMContentLoaded ==> means page rendered, DOM is ready.
//window load ==> (all content (e.g. images, styles etc) also loaded

//window.onload = () =>{} ===> JS
// addEventListener ===> on

$(window).on("load", () => {
    console.log("window.load");
});

// document.addEventListener("DOMContentLoaded", ()=>{}) ==> JS

// $(document).on("DOMContentLoaded", ()=>{
//     console.log("DOMContentLoaded");
// });

$(document).ready(() => {
    console.log("DOMContentLoaded");
    localStorage.setItem("apiKey", EncryptStringAES("4d8fb5b93d4af21d66a2948710284366"));
});

// formJquery.on("submit", (e)=>{
//     e.preventDefault();
//     getWeatherDataFromApi();
// });

formJquery.submit((e) => {
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
    //console.log("AJAX Func. is called");
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    //JS .value == jQUERY .val()
    const cityName = inputJQ.val();
    console.log(cityName);
    const units = "metric";
    const lang = "tr";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}&lang=${lang}`;

    // XMLHttpRequest(xhr) vs. fetch() vs. axios vs. $.ajax

    $.ajax({ // birden fazla parametre tanımladığımız zaman ({})
        type : "GET",  // en çok kullanılan parametreler get,url,dataType
        url : url,
        dataType : "json",
        succes : (response) => {
            //main body func.
            console.log(response)

            const {main, sys, name, weather}= response;
             
        },
        beforeSend: (request) => {
            console.log("before ajax send");
        },// request e birşeyler göndereceksen buradan
        
       complete: ()=>{
            console.log("after ajax send");
        },
        error : (XMLHttpRequest) => {
            console.log(XMLHttpRequest);
        },
    });

}


