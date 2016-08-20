import MaskInputComponent from 'ember-text-mask/components/mask-input';
import textMaskAddons from 'ember-text-mask-addons';

export default MaskInputComponent.extend({
  mask: textMaskAddons.emailMask
});
