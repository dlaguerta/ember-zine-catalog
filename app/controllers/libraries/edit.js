import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      save: function() {
        console.log('clicked button to save');
        console.log(this.get("model").name);
        var library = this.get("model");
        console.log(library.get('name'));
        library.set('name', library.get('name'));
        library.save().then(function(){
          console.log('success?');
        });
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
