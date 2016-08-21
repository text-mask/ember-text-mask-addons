import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { autoCorrectedMmddyyyyPipe } from 'ember-text-mask-addons';

export default MaskedInputComponent.extend({
  keepCharPositions: true,
  placeholderChar: '\u2000',
  mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
  pipe: autoCorrectedMmddyyyyPipe
});
