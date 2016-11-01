import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TextMaskAddons from 'ember-text-mask-addons';
import { createNumberMask } from 'ember-text-mask-addons';

const { run } = Ember;

moduleForComponent('create-number-mask', 'Unit | Component | create number mask', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});

test('TextMaskAddons.createNumberMask should be a function', function(assert) {
  assert.expect(1);
  assert.equal(Ember.typeOf(TextMaskAddons.createNumberMask), 'function');
});

test('TextMaskAddons.createNumberMask is the same as createNumberMask', function(assert) {
  assert.expect(1);
  assert.deepEqual(TextMaskAddons.createNumberMask, createNumberMask);
});

test('update() method calls textMaskInputElement.update()', function(assert) {
  assert.expect(1);

  var component = this.subject();
  this.render();

  // stub the textMaskInputElement
  run(() => component.set('textMaskInputElement', {
    update: () => assert.ok(true)
  }));

  component.update();
});
