import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const SearchTypes = makeConstantCreator('SEARCH', 'SEARCH_SUCCESS', 'SEARCH_FAILURE');

/************************************************** */

const search = (data) => makeActionCreator(SearchTypes.SEARCH, { data });
const searchSuccess = (response) => makeActionCreator(SearchTypes.SEARCH_SUCCESS, { response });
const searchFailure = (error) => makeActionCreator(SearchTypes.SEARCH_FAILURE, { error });
export default {
  search,
  searchSuccess,
  searchFailure,
};
