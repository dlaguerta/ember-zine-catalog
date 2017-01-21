import Ember from 'ember';
//import the controller from eariler
// import pagedArray from 'ember-cli-pagination/computed/paged-array';
export default Ember.Controller.extend({
  actions: {
   filterByTags(param) {
     if (param !== '') {
       return this.get('store').query('zine', { tags: param });
     } else {
       return this.get('store').findAll('zine');
     }
   }
 },
 //for pagination addon
 // queryParams: ["page","perPage"],
 //  page: 1,
 //
 //  pageBinding: Ember.computed.oneWay("content.page")
});
