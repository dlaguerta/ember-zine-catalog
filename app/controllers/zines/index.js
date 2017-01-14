import Ember from 'ember';
//import the controller from eariler
export default Ember.Controller.extend({
  actions: {
   filterByTags(param) {
     if (param !== '') {
       return this.get('store').query('zine', { tags: param });
     } else {
       return this.get('store').findAll('zine');
     }
   }
 }
});
