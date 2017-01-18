import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save: function() {
        console.log('clicked button to save');
        //need to figure out how to pass input here
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
