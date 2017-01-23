import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'http://zinedreamapi.6muxddjjbp.us-west-2.elasticbeanstalk.com/',
	//uncomment if you need this later
 // extractMeta: function(store, type, payload) {
 //  if (payload && payload.total) {
 // 	 store.setMetadataFor(type, { total: payload.total });  // sets the metadata
 // 	 delete payload.total;  // keeps ember data from trying to parse "total" as a record
 //  }
 // }
});
