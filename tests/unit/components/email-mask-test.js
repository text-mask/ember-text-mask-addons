import { moduleForComponent, test } from 'ember-qunit';
import textMaskAddons from 'ember-text-mask-addons';

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

test('input() method calls textMaskInputElement.update()', function(assert) {
  assert.expect(1);

  var component = this.subject();
  this.render();

  // stub the textMaskInputElement
  component.set('textMaskInputElement', {
    update: () => assert.ok(true)
  });

  component.input();
});

test('mask should be emailMask', function(assert) {
  assert.expect(1);

  let component = this.subject();
  this.render();

  assert.equal(component.get('mask'), textMaskAddons.emailMask);
});
