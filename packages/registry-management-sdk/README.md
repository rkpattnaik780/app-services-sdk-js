## Service Registry Management SDK

RHOAS Service Registry Management TypeScript/JavaScript SDK.

### Getting Started

#### Install Package

```
npm install @rhoas/registry-management-sdk --save
```

#### Usage

```ts
import { Configuration, DefaultApi } from "@rhoas/registry-management-sdk";

const accessToken = process.env.CLOUD_API_TOKEN;
const basePath = "https://api.openshift.com";

const apiConfig = new Configuration({
  accessToken,
  basePath,
});

const registryApi = new DefaultApi(apiConfig)

registryApi.getRegistries().then((data) => {
    console.log(data?.data)
}).catch((err) => {
    console.error(err.message)
})
```

See [./examples](https://github.com/redhat-developer/app-services-sdk-js/tree/main/examples) for full example



#### Security

API is using https://sso.redhat.com for OAuth Authentication.
Provided token needs to be AccessToken returned from library like keycloak.js
