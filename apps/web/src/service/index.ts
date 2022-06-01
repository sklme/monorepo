import { CommonService } from '@/service/_service';

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

export const service = new CommonService<typeof apis>(apis, '/api');
