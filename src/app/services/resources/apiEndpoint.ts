export interface ApiEndpoint {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
}