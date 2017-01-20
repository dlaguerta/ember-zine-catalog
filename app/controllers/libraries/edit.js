import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      saveLibrary: function() {
        console.log('clicked button to save');
        console.log('after click:' + this.get("model").name);
        // var library = this.get("model");
        // console.log("LIBRARY" + library);
        // console.log(library.get('name'));
        // library.set('name', library.get('name'));
        // this.get('model').updateRecord();
        this.get('model').save().then(function(){
          console.log('library.save happened, then:');
          this.transitionTo('libraries.show', this.get('model'));
        });
        //need to figure out how to pass input here
    }
  }
});

