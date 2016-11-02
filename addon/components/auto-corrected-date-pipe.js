import Ember from 'ember';
import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { createAutoCorrectedDatePipe } from 'ember-text-mask-addons';

const dateFormatChars = ['d', 'm', 'y'];
const defaultDateFormat = 'mm/dd/yyyy';

export default MaskedInputComponent.extend({

  dateFormat: defaultDateFormat,
  keepCharPositions: true,
  placeholderChar: '\u2000',

  /*
    Return an object with both mask and pipe.
  */
  mask: Ember.computed('dateFormat', function () {
    let dateFormat = this.get('dateFormat') || defaultDateFormat;
    return {
      mask: dateFormat.split('').map(char => (dateFormatChars.indexOf(char.toLowerCase()) === -1) ? char:/\d/),
      pipe: createAutoCorrectedDatePipe(dateFormat)
    };
  })
});
