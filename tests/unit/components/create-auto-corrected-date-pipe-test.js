import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import TextMaskAddons from 'ember-text-mask-addons';
import { createAutoCorrectedDatePipe } from 'ember-text-mask-addons';

const { run } = Ember;

moduleForComponent('create-auto-corrected-date-pipe', 'Unit | Component | create auto corrected date pipe', {
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

test('TextMaskAddons.createAutoCorrectedDatePipe should be a function', function(assert) {
  assert.expect(1);
  assert.equal(Ember.typeOf(TextMaskAddons.createAutoCorrectedDatePipe), 'function');
});

test('TextMaskAddons.createAutoCorrectedDatePipe is the same as createAutoCorrectedDatePipe', function(assert) {
  assert.expect(1);
  assert.deepEqual(TextMaskAddons.createAutoCorrectedDatePipe, createAutoCorrectedDatePipe);
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

test('mask - dateFormat dd/mm/yyyy', function(assert) {
  assert.expect(1);

  let component = this.subject({ dateFormat: 'dd/mm/yyyy' });
  this.render();

  assert.deepEqual(component.get('mask'), [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]);
});

test('mask - dateFormat yyyy/mm/dd', function(assert) {
  assert.expect(1);

  let component = this.subject({ dateFormat: 'yyyy/mm/dd' });
  this.render();

  assert.deepEqual(component.get('mask'), [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/]);
});

test('mask - dateFormat dd-mm-yyyy', function(assert) {
  assert.expect(1);

  let component = this.subject({ dateFormat: 'dd-mm-yyyy' });
  this.render();

  assert.deepEqual(component.get('mask'), [/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]);
});

test('mask - dateFormat dd-mm-yyyy', function(assert) {
  assert.expect(1);

  let component = this.subject({ dateFormat: 'dd|mm|yy' });
  this.render();

  assert.deepEqual(component.get('mask'), [/\d/, /\d/, '|', /\d/, /\d/, '|', /\d/, /\d/]);
});

test('pipe should be a function', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(typeof component.get('pipe'), 'function');
});
