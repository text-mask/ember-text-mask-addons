import AutoCorrectedMmddyyyyPipe from './lib/auto-corrected-mmddyyyy-pipe';
import CreateNumberMask from './lib/create-number-mask';
import EmailMask from './lib/email-mask';

const autoCorrectedMmddyyyyPipe = AutoCorrectedMmddyyyyPipe.autoCorrectedMmddyyyyPipe.default;
const createNumberMask = CreateNumberMask.createNumberMask.default;
const emailMask = EmailMask.emailMask.default;

export default { autoCorrectedMmddyyyyPipe, createNumberMask, emailMask };
export { autoCorrectedMmddyyyyPipe };
export { createNumberMask };
export { emailMask };
