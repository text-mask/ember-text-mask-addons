import { moduleForComponent, test } from 'ember-qunit';
import textMaskAddons from 'ember-text-mask-addons';

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

test('input() method calls textMaskInputElement.update()', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  // stub the textMaskInputElement
  component.set('textMaskInputElement', {
    update: () => assert.ok(true)
  });

  component.input();
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

  assert.equal(component.get('pipe'), textMaskAddons.autoCorrectedMmddyyyyPipe);
});
