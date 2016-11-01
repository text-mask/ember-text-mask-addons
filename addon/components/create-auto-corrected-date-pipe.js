import Ember from 'ember';
import MaskedInputComponent from 'ember-text-mask/components/masked-input';
import { createAutoCorrectedDatePipe } from 'ember-text-mask-addons';

const dateFormatChars = ['d', 'm', 'y'];
const defaultDateFormat = 'mm/dd/yyyy';

export default MaskedInputComponent.extend({

  dateFormat: defaultDateFormat,
  keepCharPositions: true,
  placeholderChar: '\u2000',

  mask: Ember.computed('dateFormat', function () {
    let dateFormat = this.get('dateFormat') || defaultDateFormat;
    return dateFormat.split('').map(char => {
      return (dateFormatChars.indexOf(char.toLowerCase()) === -1) ? char:/\d/;
    });
  }),

  pipe: Ember.computed('dateFormat', function () {
    return createAutoCorrectedDatePipe(this.get('dateFormat'));
  })
});
