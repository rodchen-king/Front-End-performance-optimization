onmessage = function (count) {
	console.log("web worker start")

    var i = 0;

    while(i < count) {
    	i ++;
    }

    postMessage("web worker finish");
};