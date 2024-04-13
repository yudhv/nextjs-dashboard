/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'nextjs-dashboard',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          region: 'us-west-2',
          profile: 'work',
        },
      },
    };
  },
  async run() {
    const pg = new sst.aws.Postgres('MyDb');
    new sst.aws.Nextjs('MyWeb', {
      link: [pg],
    });
  },
});
