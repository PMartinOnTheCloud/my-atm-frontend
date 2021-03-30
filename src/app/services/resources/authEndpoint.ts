import {ApiEndpoint} from './apiEndpoint';

export interface ServerEndpoints {
    login: ApiEndpoint;
    logout: ApiEndpoint;
    info: ApiEndpoint;
}

//export const serverHost: string = 'https://rts.atmosferia.net';
export const serverHost: string = 'http://localhost:3000';

export const serverEndpoints: ServerEndpoints = {
    login: {method: 'POST', path: serverHost + '/auth/login'},
    logout: {method: 'POST', path: serverHost + '/auth/logout'},
    info: {method: 'GET', path: serverHost + '/auth/info'}
};
