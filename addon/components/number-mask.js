import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { createNumberMask } from 'ember-text-mask-addons';
import { computed } from '@ember/object';

function _createNumberMask(...args) {
  return computed(...args, function () {
    return this.createNumberMask(this.getProperties(...args));
  });
}

export default MaskedInputComponent.extend({
  createNumberMask,
  mask: _createNumberMask('prefix', 'suffix', 'includeThousandsSeparator', 'thousandsSeparatorSymbol', 'allowDecimal', 'decimalSymbol', 'decimalLimit', 'requireDecimal', 'allowNegative', 'allowLeadingZeroes', 'integerLimit')
});
