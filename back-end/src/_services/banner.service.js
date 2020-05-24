import { authHeader } from '../_helpers';
import { apiService } from './api.service';

export const bannerService = {
    addBanner
};

function addBanner(requestData) {
    return apiService.POST(`api/banner/add-banner`, requestData).then((data) => {
        let user = data.data;
        return user;
    });
}