import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
     zines: this.store.findAll('zine'),
     libraries: this.store.findAll('library')
   });
    // return this.get('store').findAll('library');
  }
});
