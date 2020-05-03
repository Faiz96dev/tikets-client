import Cookies from 'js-cookie/src/js.cookie'

export const setTokensCookies = (tokens) => {
    Cookies.set('access', tokens.access);
    Cookies.set('refresh', tokens.refresh);
}

export const getAccessToken = async () => {
    return await Cookies.get('access');
}
