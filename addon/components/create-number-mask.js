import Ember from 'ember';
import MaskInputComponent from 'ember-text-mask/components/mask-input';
import textMaskAddons from 'ember-text-mask-addons';

export default MaskInputComponent.extend({

  mask: Ember.computed('prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'requireDecimal', function () {
    return textMaskAddons.createNumberMask(this.getProperties('prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'requireDecimal'))
  })
});
