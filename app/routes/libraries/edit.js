import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('library', params.library_id);

  },

  setupController (controller, model) {
    controller.set("model", model);
  }
});
