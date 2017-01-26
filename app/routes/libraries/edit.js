import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  setupController (controller, model) {
     this._super(controller, model);
  },

  actions: {
      saveLibrary(library) {
        console.log('after click:' + this.get("model").name);
        var self = this;
        library.save().then(function(library){
          console.log(library);
          self.transitionTo('libraries.show', library.id);
        });
    }
  }
});
