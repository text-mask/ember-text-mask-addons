import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { emailMask } from 'ember-text-mask-addons';

export default MaskedInputComponent.extend({
  mask: emailMask
});
