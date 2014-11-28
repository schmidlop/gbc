// Start sails and pass it command line arguments
//require('sails').lift(require('optimist').argv);

require('sails').lift({port:3000, host:'127.0.0.1', environment:'production'});
//$(".owl-carousel").owlCarousel({items:1,dots:false,loop:true,nav:true});