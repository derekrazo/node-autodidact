var summary = require('./index.js');

summary.summarize('http://thenextweb.com/apps/2014/05/28/skillz-brings-real-money-gaming-platform-ios', function(title, summary, failure) {
	if (failure) {
		console.log("An error occured!");
	}

  console.log("#### " + title + " ####");
	console.log(summary.join("\n"));
});
