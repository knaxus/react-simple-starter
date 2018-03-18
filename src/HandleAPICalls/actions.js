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
  config,
) {
  return {
    type: MAKE_API_CALL,
    url,
    method,
    body,
    handleSuccess,
    handleError,
    preventToastr,
    config,
  };
}

/* eslint-anble */