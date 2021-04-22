import { makeActionCreator, makeConstantCreator } from '../../../utils/ReduxUtils';

export const InfoTypes = makeConstantCreator('USER_INFO', 'USER_INFO_SUCCESS', 'USER_INFO_FAILURE');

const getInfoUser = () => makeActionCreator(InfoTypes.USER_INFO);
const getInfoUserSuccess = (response) =>
  makeActionCreator(InfoTypes.USER_INFO_SUCCESS, { response });
const getInfoUserFailure = (error) => makeActionCreator(InfoTypes.USER_INFO_FAILURE, { error });

export default {
  getInfoUser,
  getInfoUserSuccess,
  getInfoUserFailure,
};
