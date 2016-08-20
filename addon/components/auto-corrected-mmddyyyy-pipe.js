import MaskInputComponent from 'ember-text-mask/components/mask-input';
import textMaskAddons from 'ember-text-mask-addons';

export default MaskInputComponent.extend({
  keepCharPositions: true,
  placeholderChar: '\u2000',
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: textMaskAddons.autoCorrectedMmddyyyyPipe
});
