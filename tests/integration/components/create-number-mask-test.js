import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('create-number-mask', 'Integration | Component | create number mask', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{create-number-mask}}`);
  assert.equal(this.$('input').length, 1);
});
