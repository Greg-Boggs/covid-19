$(document).ready(function() {
    $("tbody").each(function(elem,index){
        var arr = $.makeArray($("tr",this).detach());
        arr.reverse();
        $(this).append(arr);
    });

});