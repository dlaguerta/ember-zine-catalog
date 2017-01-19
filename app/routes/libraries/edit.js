import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("HEY COOL DUDES WHATSUP");
    console.log(params);
    return this.store.findRecord('library', params.library_id);
    // return this.modelFor('library');
  },

  setupController (controller, model) {
     this._super(controller, model);
    controller.set("model", model);
  },

  // actions: {
  //     saveLibrary(parameters) {
  //
  //       console.log("PARAMETERS:::" + parameters);
  //       console.log("PARAMETERS:::" + parameters.get("name"));
  //       parameters.changedAttributes();
  //       parameters.save().then(function(){
  //
  //         console.log('success?');
  //       });
  //       //need to figure out how to pass input here
  //   }
  // }
});
