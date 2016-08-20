import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auto-corrected-mmddyyyy-pipe', 'Integration | Component | auto corrected mmddyyyy pipe', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{auto-corrected-mmddyyyy-pipe}}`);
  assert.equal(this.$('input').length, 1);
});
