//build.js: Configuration file for optimizing the wait function. 
/*
*/ 
({
    paths: {
	"promise": "lib/promise.min",
	"rsvp": "lib/rsvp.min"
    },
    exclude: [ "rsvp" ],
    name: "wait",
    out: "wait.min.js"
})
