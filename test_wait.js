//test_wait.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "wait",
  "tests/wait_5seconds_ResolvesUndefinedAfterAtLeast5Seconds"
], function(
  TestSuite,
  log,
  wait,
  wait_5seconds_ResolvesUndefinedAfterAtLeast5Seconds
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_wait initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "wait" );
          
	xTestSuite.add( wait_5seconds_ResolvesUndefinedAfterAtLeast5Seconds );
  
      xTestSuite.test();
    }
  });
});
