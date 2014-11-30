// Start sails and pass it command line arguments
//require('sails').lift(require('optimist').argv);

require('sails').lift({port:80, host:'gracebaptist.church', environment:'production'});
//$(".owl-carousel").owlCarousel({items:1,dots:false,loop:true,nav:true});