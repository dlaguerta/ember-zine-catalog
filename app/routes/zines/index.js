import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('zine');

    return Ember.RSVP.hash({
     zines: this.store.findAll('zine', {include: 'library'}),
     libraries: this.store.findAll('library')
   });
  }
});
