import { getEndpoints } from "./config";
import { getSession, setSession } from "./session";

export interface AuthenticatedApiOptions {
  checkTokenExpiration?: ResponseHandler;
  token?: string;
}

export type DeleteResponse = {
  operation: boolean;
};

export type ResponseHandler = (response: Response) => Promise<Response>;
export const getHeaders = {
  Accept: 'application/json'
}
export const postHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8'
};

const formatResponse = (response: Response) => {
  const contentType = response.headers.get('content-type');
  if (!contentType || contentType.indexOf('application/json') >= 0) {
    return response.json().catch(() => {
      // TODO:
    });
  }

  return response;
}

const withAuthenticationToken = (headers: HeadersInit, token?: string) => {
  const session = getSession();
  const jwt = token || (session && session.jwt);
  if (!jwt) {
    return headers;
  }

  return {
    ...headers,
    Authorization: `${jwt}`,
  }
}

export const authenticatedApi = (url: string, args: RequestInit = {}, options: AuthenticatedApiOptions = {}) => {
  const {
    checkTokenExpiration,
    token
  } = options || {};
  args.headers = withAuthenticationToken(args.headers || {}, token);

  return api(url, args, checkTokenExpiration).catch((err) => {
    console.log('error during calling', err);
  });
}

export const api = (url: string, args: RequestInit = {}, checkTokenExpirationFn: ResponseHandler = checkTokenExpiration) => {
  let absoluteUrl = url;
  if (!url.startsWith("/")) {
    absoluteUrl = `/${url}`;
  }

  const finalUrl = `${getEndpoints().api}${absoluteUrl}`
  return fetch(finalUrl, args)
    .catch(r => { throw r })
    .then(checkStatus)
    .then(checkTokenExpirationFn)
    .then(formatResponse)
    .catch(error => {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      throw error;
    });
}

export const refreshToken = () => {
  const token = getSession();
  const options = {
    method: 'PUT',
    headers: postHeaders,
    body: JSON.stringify({
      jwt: token && token.jwt,
      refresh: token && token.refresh
    })
  };

  const url = `${getEndpoints().api}/auth/refresh`
  return fetch(url, options)
    .then(checkStatus)
    .then(formatResponse)
    .then(session => {
      setSession(session);
      return session;
    })
    .catch(async err => {
      if (err.response.status === 401) {
        // Necesito mandarlo al login o hacer nada
        return;
      }
      console.log('Error trying to refresh token')
    })
}

const checkTokenExpiration = async (response: Response) => {
  const token = getSession();
  // La api aun no devuelve esto
  if (response.headers && response.headers.get('x-jwt-refresh') && token && token.refresh) {
    refreshToken();
  }

  return response;
}

const checkStatus = (response: Response) => {
  if (response.ok) {
    return response;
  }

  const error = new Error(response.statusText);
  (error as any).response = response;
  throw error;
}
