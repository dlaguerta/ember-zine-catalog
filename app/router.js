import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('zines', function() {
    this.route('show', { path: '/:zine_id' });
  });
  this.route('libraries', function() {
    this.route('show',{ path: '/:library_id' });
  });
});

export default Router;
