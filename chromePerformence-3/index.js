$.ajax({
	url: '.baidu.bmp',
	type: 'GET'
})
.done(function() {
	console.log("success");
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
