import { TOKEN } from '../config';

const useFetchGet = async url => {
  const response = await fetch(url, {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: TOKEN,
  });

  const data = await response.json();

  return data;
};

export { useFetchGet };
