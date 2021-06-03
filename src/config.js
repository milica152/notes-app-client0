const config = {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "api-app-upload",
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://kkw34tvy0d.execute-api.eu-west-1.amazonaws.com/dev/",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_nwGY0Rl7X",
      APP_CLIENT_ID: "77e045qgnegu0747gh7hs5frrd",
      IDENTITY_POOL_ID: "eu-west-1:6ebfd9be-42fb-470b-9184-d37811cd44bc",
    },
  };
  
  export default config;