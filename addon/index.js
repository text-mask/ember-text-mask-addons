import AutoCorrectedMmddyyyyPipe from 'ember-text-mask-addons/autoCorrectedMmddyyyyPipe';
import CreateNumberMask from 'ember-text-mask-addons/createNumberMask';
import EmailMask from 'ember-text-mask-addons/emailMask';

const autoCorrectedMmddyyyyPipe = AutoCorrectedMmddyyyyPipe.autoCorrectedMmddyyyyPipe.default;
const createNumberMask = CreateNumberMask.createNumberMask.default;
const emailMask = EmailMask.emailMask.default;

export default { autoCorrectedMmddyyyyPipe, createNumberMask, emailMask };
export { autoCorrectedMmddyyyyPipe };
export { createNumberMask };
export { emailMask };
