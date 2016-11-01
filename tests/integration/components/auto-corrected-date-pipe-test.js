import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auto-corrected-date-pipe', 'Integration | Component | auto corrected date pipe', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{auto-corrected-date-pipe}}`);
  assert.equal(this.$('input').length, 1);
});
