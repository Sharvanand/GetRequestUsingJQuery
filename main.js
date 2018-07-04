$('#btn').click(function(){
$.ajax({
    method:"GET",
    url:"https://baconipsum.com/api/?type=meat-and-filler",
    dataType:"json"
})
.done(function(data){
    $("h4").text(data[0]);
})
.fail(function(){
    console.log("Something went wrong");
})
});