

import Ember from 'ember';

export default Ember.Component.extend({
  isAdditionalShowing: false,
  actions: {
    additionalShow: function() {
      this.set('isAdditionalShowing', true);
    },
    additionalHide: function() {
      this.set('isAdditionalShowing', false);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
