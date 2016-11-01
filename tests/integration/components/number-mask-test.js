import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('number-mask', 'Integration | Component | number mask', {
  integration: true
});

test('it renders an input element', function(assert) {
  this.render(hbs`{{number-mask}}`);
  assert.equal(this.$('input').length, 1);
});
