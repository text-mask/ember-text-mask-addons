import Ember from 'ember';
import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { createNumberMask } from 'ember-text-mask-addons';

export default MaskedInputComponent.extend({

  mask: Ember.computed('prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'requireDecimal', function () {
    return createNumberMask(this.getProperties('prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'requireDecimal'));
  })
});
