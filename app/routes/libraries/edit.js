import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // console.log(params);
    return this.store.findRecord('library', params.library_id);
  },

  setupController (controller, model) {
     this._super(controller, model);
  },

  //try placing the action here if it does not activate in controller
  actions: {
      saveLibrary(library) {
        console.log('after click:' + this.get("model").name);
        // var library = this.get("model");
        // console.log("LIBRARY" + library);
        // console.log(library.get('name'));
        // library.set('name', library.get('name'));
        // var library = this.get('model');
        var self = this;
        library.save().then(function(library){
          console.log(library.get('name'));
          console.log(library);
          // var lib_id = library.get('id');
          self.transitionTo('libraries.show', library.id);
        });
    }
  }
});
