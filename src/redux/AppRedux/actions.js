import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const AppTypes = makeConstantCreator('STARTUP', 'MARK_SKIP_INTRO');

export const startup = () => makeActionCreator(AppTypes.STARTUP);
export const markSkipIntro = () => makeActionCreator(AppTypes.MARK_SKIP_INTRO);
