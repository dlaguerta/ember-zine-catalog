import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('zine', params.zine_id);
    // return this.get('store').findRecord('zine', params.zine_id, {include:'libraries'});
}
});
