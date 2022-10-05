const formJS = document.querySelector("form");
// const formJquery =  jQuery("from"); // query selectorAll gibi çoklu seçime imkan tanıyor.
//JQUERY === $  dolar işareti kullanılır
// const formJquery =  jQuery("from").eq(0);
const formJquery =  $("from").eq(0);
const inputJQ = $(".top-banner input").eq(0);
const msgJQ = $(".top-banner span").eq(0);
const listJQ = $(".cities").eq(0);


//console.log(formJS);
//console.log(formJquery);
// console.log(inputJQ);


// get(index), eq(index) Jquery' nin index alma yöntemi. daha çok elementq kullanılıyor.
// get(index) ==> toArray(get())

//load VS DOMContentLoaded  
// DOMContentLoaded ==> means page rendered, DOM is ready.
//window load ==> (all content (e.g. images, styles etc) also loaded

//window.onload = () =>{} ===> JS
// addEventListener ==> on

$(window).on("load", () =>{
    console.log("window.load");
});

// document.addEventListener("DOMContentLoaded", () =>{})

// $(document).on(()=>{    on yerine yaygın kullanım ready
//     console.log("DOMContentLoaded");
// });


$(document).ready(()=>{
    console.log("DOMContentLoaded");
});

// formJquery.on("submit", (e)=>{
//     e.preventDefault();
//     getWeatherDataFromApi();
// });

formJquery.on("submit", (e)=>{
    e.preventDefault();
    getWeatherDataFromApi();
});

const getWeatherDataFromApi  = () =>{
    console.log("AJAX Func. is called");
}
