import { CommonService } from '@/service/_service';

const apis = [
  {
    name: 'server1',
    path: '/',
  },
  {
    name: 'server2',
    path: '/server2',
  },
] as const;

export const service = new CommonService<typeof apis>(apis, '/api');
