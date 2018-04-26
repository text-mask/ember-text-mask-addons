import { moduleForComponent, test } from 'ember-qunit';
import TextMaskAddons from 'ember-text-mask-addons';
import { emailMask } from 'ember-text-mask-addons';
import { typeOf } from '@ember/utils';
import { run } from '@ember/runloop';

moduleForComponent('email-mask', 'Unit | Component | email mask', {
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

test('TextMaskAddons.emailMask should be an object with two functions', function(assert) {
  assert.expect(3);
  assert.equal(typeOf(TextMaskAddons.emailMask), 'object');
  assert.equal(typeOf(TextMaskAddons.emailMask.mask), 'function');
  assert.equal(typeOf(TextMaskAddons.emailMask.pipe), 'function');
});

test('TextMaskAddons.emailMask is the same as emailMask', function(assert) {
  assert.expect(1);
  assert.deepEqual(TextMaskAddons.emailMask, emailMask);
});

test('update() method calls textMaskInputElement.update()', function(assert) {
  assert.expect(1);

  var component = this.subject({ _textMaskInputElementChanged(){} });
  this.render();

  // stub the textMaskInputElement
  run(() => component.set('textMaskInputElement', {
    update: () => assert.ok(true)
  }));

  component.update();
});

test('mask should be emailMask', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(component.get('mask'), TextMaskAddons.emailMask);
});
