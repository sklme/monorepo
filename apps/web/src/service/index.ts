import axios, { AxiosInstance } from 'axios';
import { Optional } from 'utility-types';

export interface ApiItem {
  name: string;
  url: string;
  path: string;
}

export type ApiItemParam = Optional<ApiItem, 'url'>;

class CommonService<
  T extends readonly ApiItemParam[] = readonly ApiItemParam[]
> {
  #axios: AxiosInstance;
  #apiMap = new Map<T[number]['name'], ApiItem>();
  #host = '';

  constructor(public apiItems: T, host = '') {
    this.#axios = axios.create();

    // 初始化host
    this.#host = host;

    // 初始化api
    this.#initApiMap();
  }

  // 初始化API Map
  #initApiMap() {
    this.apiItems.forEach((apiItem) => {
      this.#apiMap.set(apiItem.name, {
        ...apiItem,
        url: `${this.#host}${apiItem.path}`,
      });
    });
  }

  // 初始化host
  getApiUrl(apiName: T[number]['name']) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.#apiMap.get(apiName)!.name;
  }

  // 通用的request
  // async request<ReturnShape>(config: AxiosRequestConfig) {
  //   // 获取请求参数
  //   // const params = config.data || config.params || {};
  //   //
  //   // const params = {
  //   //   _timestamp: +new Date(),
  //   // };
  // }
}

// 示例
const apis = [
  {
    name: 'a',
    path: '/a',
  },
  {
    name: 'b',
    path: '/b',
  },
] as const;

const commonService = new CommonService<typeof apis>(apis);
commonService.getApiUrl('a');
