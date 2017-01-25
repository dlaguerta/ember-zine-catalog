import DS from 'ember-data';
export default DS.Model.extend({
  name  : DS.attr('string'),
  city  : DS.attr('string'),
  state : DS.attr('string'),
  zines : DS.belongsTo('zine', {async: true}),
  description: DS.attr('string'),
  photo: DS.attr('string'),
  circulation: DS.attr('boolean'),
  url : DS.attr('string')
});
