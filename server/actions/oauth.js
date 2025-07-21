import logger from '../../shared/utils/logger';
import {promisify} from '../../shared/utils/index';
import querystring from 'querystring';
import request from 'request';
const requestGet = promisify(request.get);
import {db$findUser, db$registerUser, db$updateUserByAuth} from './db';
import {AUTH_TYPE} from '../../shared/constants';
import {server$injectUser} from '../../shared/actions/actions';


    , redirect_uri: `${protocol}://${host}/api/oauth/vk`
    , code
    , v: API_VERSION
  };

  return requestGet(accessTokenUri)
    .then((response) => {
      const body = (typeof response.body === 'string') ? JSON.parse(response.body) : response.body;
      return body;
    })
    .then(({access_token, expires_in, user_id}) =>
        .then((user) => server$getUserInfo(user_id, access_token, expires_in)
          .then((userInfo) => ({
            name: userInfo.first_name + ' ' + userInfo.last_name
            , auth: {
              , id: user_id
              , name: userInfo.first_name + ' ' + userInfo.last_name
              , access_token
              , expires_in
            }
          }))
          .then((updateObject) => {
            return (user === null
              ? db$registerUser(updateObject)
          })
        )
    )
    .then((user) => user.token)
    .catch(err => {
      logger.error(err);
      throw err;
    });
};

export const server$getUserInfo = (user_id, access_token, expires_in) =>
      access_token
      , v: API_VERSION
    }))
    .then((response) => {
      const body = (typeof response.body === 'string') ? JSON.parse(response.body) : response.body;
      if (body.error) throw new Error('server$getUserInfo:' + response.body);
      return body;
    })
    .then(({response}) => {
      if (response.length !== 1) throw new Error('Invalid login response');
      return response[0];
    });