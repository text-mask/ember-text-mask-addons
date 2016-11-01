import CreateAutoCorrectedDatePipe from 'ember-text-mask-addons/createAutoCorrectedDatePipe';
import CreateNumberMask from 'ember-text-mask-addons/createNumberMask';
import EmailMask from 'ember-text-mask-addons/emailMask';

const createAutoCorrectedDatePipe = CreateAutoCorrectedDatePipe.createAutoCorrectedDatePipe.default;
const createNumberMask = CreateNumberMask.createNumberMask.default;
const emailMask = EmailMask.emailMask.default;

export default { createAutoCorrectedDatePipe, createNumberMask, emailMask };
export { createAutoCorrectedDatePipe };
export { createNumberMask };
export { emailMask };
