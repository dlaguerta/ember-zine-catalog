import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('zine', params.zine_id);
    // return this when working on mongodb relationships this.get('store').findRecord('zine', params.zine_id, {include:'libraries'});
}
});
