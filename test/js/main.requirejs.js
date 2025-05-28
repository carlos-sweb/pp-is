requirejs.config({
    baseUrl:'js',
    paths: {
        'pp-is': 'pp-is.min',
    }
});

// Start the main app logic.
requirejs([ 'pp-is' ], function( ppIs ) {
 
    ppIs.isString("hola",()=>console.log("Is String..."))

});