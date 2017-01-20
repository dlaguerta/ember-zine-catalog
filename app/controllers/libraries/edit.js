import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      saveLibrary: function() {
        console.log('after click:' + this.get("model").name);
        // var library = this.get("model");
        // console.log("LIBRARY" + library);
        // console.log(library.get('name'));
        // library.set('name', library.get('name'));
        this.get('model').save().then(function(){
          console.log('library.save happens');
          this.transitionTo('libraries.show', this.get('model'));
        });
    }
  }
});

