import { API } from '@/services';

//axios请求示例
export const testAxios1: any = (params: object): any => {
  return API({
    url: '/myBackground/ports/article.php',
    params,
  });
};
