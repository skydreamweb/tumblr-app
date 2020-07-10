import qs from 'qs';

const CLIENT_ID = "9bcb22c37ecff67";
const ROOT_URL = "https://api.imgur.com"


export default {
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        };

       window.location = `${ ROOT_URL }/oauth2/authorize?${qs.stringify(querystring)}`;
    }
}