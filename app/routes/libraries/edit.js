import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // console.log(params);
    return this.store.findRecord('library', params.library_id);
    // return this.modelFor('library');
  },

  setupController (controller, model) {
     this._super(controller, model);
    controller.set("model", model);
  },
  //try placing the action here if it does not activate in controller

});
