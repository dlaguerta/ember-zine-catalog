import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	namespace: 'api',
	host: 'http://localhost:4500',
	extractMeta: function(store, type, payload) {
	 if (payload && payload.total) {
		 store.setMetadataFor(type, { total: payload.total });  // sets the metadata for "post"
		 delete payload.total;  // keeps ember data from trying to parse "total" as a record
	 }
 }
});
