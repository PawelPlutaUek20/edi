var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: '[VGBZRsVNDVqNBZ8nNPPXG9XJvqTUgvrh]',
  clientSecret: '[5iGXeAG3xN98XuDx]'
});

amadeus.referenceData.urls.checkinLinks.get({ airlineCode: 'IB' });