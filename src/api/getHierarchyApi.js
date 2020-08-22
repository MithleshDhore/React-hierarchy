import { get } from '../util/request';

async function hierarchyApi(apiOptions) {
  const url = `${process.env.PUBLIC_URL}/data.json`;
  return get(url)(apiOptions).then(({ body } = {}) => ({...body}));
}

export { hierarchyApi };
