export function authHeader() {
    // return authorization header with jwt token
    // let user = JSON.parse(localStorage.getItem('user'));

    // if (user && user.token) {
    //     // return { 'Authorization': 'Bearer ' + user.token };
    //     return { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU5MDMxMTU5OH0.nnLnrCm1g0iEYEU5gBLtF-c0pK2LHMQsDxE22lA7yNI' };
    // } else {
    //     return {};
    // }
    return { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjUsImlhdCI6MTU5MDMxMTU5OH0.nnLnrCm1g0iEYEU5gBLtF-c0pK2LHMQsDxE22lA7yNI' };
}