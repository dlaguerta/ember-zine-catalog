import DS from 'ember-data';
var attr = DS.attr;
export default DS.Model.extend({
  name  : DS.attr('string'),
  city  : DS.attr('string'),
  state : DS.attr('string'),
  zines : DS.belongsTo('zine', {async: true})
});
