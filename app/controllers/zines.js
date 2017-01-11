import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
   filterByTitle(param) {
     if (param !== '') {
       return this.get('store').query('zine', { title: param });
     } else {
       return this.get('store').findAll('zine');
     }
   }
 }
});
