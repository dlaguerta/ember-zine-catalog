import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save:function(model) {
        console.log('clicked button to save');
        console.log(model);
    }
  }
});
// this.get('store').findRecord('library', params.library_id) .then(function(library) {
//   library.get('name'); // => "Rails is Omakase"
//
//   library.set('name', 'A new library');
//
//   library.save(); // => PATCH to '/posts/1'
// });
// }
// }
