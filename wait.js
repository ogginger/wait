//wait.js: Functional Logic.

define([
	"promise"
], function(
	promise
) {
  return function( Input ) {
	return promise(function( resolve ) {
		setTimeout(function() {
			resolve();
		}, Input * 1000 );
	});
  };
});
