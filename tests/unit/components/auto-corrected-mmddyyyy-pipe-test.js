import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TextMaskAddons from 'ember-text-mask-addons';
import { autoCorrectedMmddyyyyPipe } from 'ember-text-mask-addons';

const { run } = Ember;

moduleForComponent('auto-corrected-mmddyyyy-pipe', 'Unit | Component | auto corrected mmddyyyy pipe', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  let component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});

test('TextMaskAddons.autoCorrectedMmddyyyyPipe should be a function', function(assert) {
  assert.expect(1);
  assert.equal(Ember.typeOf(TextMaskAddons.autoCorrectedMmddyyyyPipe), 'function');
});

test('TextMaskAddons.autoCorrectedMmddyyyyPipe is the same as autoCorrectedMmddyyyyPipe', function(assert) {
  assert.expect(1);
  assert.deepEqual(TextMaskAddons.autoCorrectedMmddyyyyPipe, autoCorrectedMmddyyyyPipe);
});

test('update() method calls textMaskInputElement.update()', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  // stub the textMaskInputElement
  run(() => component.set('textMaskInputElement', {
    update: () => assert.ok(true)
  }));

  component.update();
});

test('keepCharPositions should be true', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(component.get('keepCharPositions'), true);
});

test('placeholderChar should be \u2000', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(component.get('placeholderChar'), '\u2000');
});

test('mask', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.deepEqual(component.get('mask'), [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]);
});

test('pipe should be autoCorrectedMmddyyyyPipe', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(component.get('pipe'), TextMaskAddons.autoCorrectedMmddyyyyPipe);
});
