//wait_5seconds_ResolvesTrue.js: Testing logic.

define([
	"wait",
	"promise",
	"log"
], function(
	wait,
	promise,
	log
) {
	return {
		"Async": true,
		"Name":"wait_5seconds_ResolvesTrue",
		"Input": function() {
			var xDate = new Date();
			return {
				"InitialTime": xDate.getTime(),
				"TimeoutInterval": 5
			};
		},
		"Function": function( Input ) {
			return promise(function( resolve ) {
				wait( Input.TimeInterval ).then(function() {
					resolve( Input );
				});
			});

		},
		"ExpectedOutput": undefined,
		"ComparisonFunction": function( Result, Expected ) {
			return promise(function( resolve ) {
				var bDebug = false;
				var xDate = new Date();
				var nEndingTime = xDate.getTime();
				var nActualTime = nEndingTime - Result.InitialTime;
				
				log( "Waited: " + nActualTime, bDebug );
				log( "Supposed to have waited: " + Result.TimeoutInterval, bDebug );	
				if ( 
					nActualTime >= Result.TimeoutInterval 
				) {
					resolve( true );
				} else { 
					resolve( false );
				}
			});
		}
	};
});
