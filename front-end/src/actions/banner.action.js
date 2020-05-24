import { bannerConstants } from '../constants';
import { bannerService } from '../services';

export const bannerActions = {
    getBanner
};

function getBanner() {
    return dispatch => {
        dispatch(request());
        bannerService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: bannerConstants.GETALL_REQUEST } }
    function success(users) { return { type: bannerConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: bannerConstants.GETALL_FAILURE, error } }
}

