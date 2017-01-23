import Ember from 'ember';
const libraryIDS = ['58838840b4150dbb7e26c3cc']
export function zineContributors([libraries]/*, hash*/) {
  
  if (libraryIDS.includes(libraries)) {
    return 'Flywheel Zine Library';
  }
  console.log(libraries);
  return 'Queer Zine Archive Project';
}

export default Ember.Helper.helper(zineContributors);
