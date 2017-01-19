import DS from 'ember-data';
var attr = DS.attr;
export default DS.Model.extend({
  title: DS.attr('string'),
  creator: DS.attr('string'),
  library_ids: DS.attr('string'),
  sub_title: DS.attr('string'),
  volume: DS.attr('number'),
  number: DS.attr('number'),
  date: DS.attr('string'),
  circa_date: DS.attr('string'),
  place_of_publication: DS.attr('string'),
  tags: DS.attr('string'),
  contributor: DS.attr('string'),
  subject_genre: DS.attr('string'),
  press_house_publisher: DS.attr('string'),
  libraries: DS.hasMany('library', {async: true})
});
