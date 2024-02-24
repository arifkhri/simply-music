
import fetchClient from '@/utils/fetch';

const baseUrl = process.env.NEXT_PUBLIC_API;

const getList = <R>(qParams: any) => {
  const { get } = fetchClient(baseUrl);

  return get<R>('/search', {...qParams, media: 'music'});
}

const music = { getList };

export default music;
