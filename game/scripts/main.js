requirejs.config({
    baseUrl: 'scripts',
    paths:{
        jquery:"jquery-1.11.2"
    }
})
requirejs([
        'jquery',
        'text',
        "text!../displays/main.html"
    ],
function   ($, _, html) {
    $(document.body).html(html);
});