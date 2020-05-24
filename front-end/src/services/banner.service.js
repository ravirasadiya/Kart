import { apiService } from './api.service';

export const bannerService = {
    getAll
};

function getAll() {
    return apiService.GET(`api/banner/bannerlist`).then((data) => {
        let user = data.data;
        return user;
    });
}