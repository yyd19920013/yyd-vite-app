import { API } from '@/services';

// axios请求示例
export const testAxios2: any = (params: object): any => {
  return API({
    url: '/myBackground/ports/article.php',
    params,
  });
};
