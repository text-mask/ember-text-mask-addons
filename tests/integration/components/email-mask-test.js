import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('email-mask', 'Integration | Component | email mask', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{email-mask}}`);
  assert.equal(this.$('input').length, 1);
});
