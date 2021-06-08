//import Immutable from 'seamless-immutable';
import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const CategoryTypes = makeConstantCreator(
  'GET_CATEGORY',
  'GET_CATEGORY_SUCCESS',
  'GET_CATEGORY_FAILURE',
);

const getCategory = (id) => makeActionCreator(CategoryTypes.GET_CATEGORY, { id });
const getCategorySuccess = (response) =>
  makeActionCreator(CategoryTypes.GET_CATEGORY_SUCCESS, { response });
const getCategoryFailure = (error) =>
  makeActionCreator(CategoryTypes.GET_CATEGORY_FAILURE, { error });

export default {
  getCategory,
  getCategorySuccess,
  getCategoryFailure,
};
