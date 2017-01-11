import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    //to add a redirect:
    // this._super(...arguments);
    // this.replaceWith('zines');
  }
});
