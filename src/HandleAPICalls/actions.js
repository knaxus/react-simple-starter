/* eslint-disable */
import { HANDLE_API_CALLS } from './constants';

/* eslint-disable import/prefer-default-export */
export function getDataFromAPI(
  url,
  method,
  body,
  handleSuccess,
  handleError,
  showToast = false,
) {
  return {
    type: HANDLE_API_CALLS,
    url,
    method,
    body,
    handleSuccess,
    handleError,
    showToast,
  };
}

/* eslint-anble */