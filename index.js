var summary = require('node-tldr');

var url = 'https://www.loomio.org/d/LuAlGpC3/introduce-yourself-to-the-loomio-community';




summary.summarize(url,function(title, summary, failure) {
	if (failure) {
		console.log("An error occured!");
	}

  console.log("#### " + title + " ####");
	console.log(summary.join("\n"));

});

