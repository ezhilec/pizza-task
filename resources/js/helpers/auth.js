export const checkAuthResponse = (response) => {
    if (response.status === 'error' &&
        response.error === 'Unauthenticated') {
        window.localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization'] = '';
        window.location.reload();
    }
}
