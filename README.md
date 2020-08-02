# Description
FHIR Angular Client PoC

## Start FHIR Server from Asymmetrik github repository
```shell
git clone https://github.com/Asymmetrik/node-fhir-server-mongo.git
cd node-fhir-server-mongo
yarn
yarn start
```

## Install swagger FHIR contract generator
```shell
npm install -g fhir-swagger
```

## Generate FHIR R4 swagger contract
```shell
fhir-swagger --fhir_url "http://localhost:3000/4_0_0" --conformance_path="/metadata?_format=application/json" --r4 --output swagger.json
```

## Install swagger codegen. Download from:
```shell
https://mvnrepository.com/artifact/io.swagger/swagger-codegen-cli
```

## Generate angular 2.X services from contract
```shell
java -jar bin/swagger-codegen-cli.jar generate -i swagger.json -l typescript-angular -o src/app/shared/service/backend
```

## Create a simple angular project
```shell
ng new fhir-client-poc
```

## Program your App ...
The code generate from swagger codegen import bad import 'rxjs'. Set in all services this new import:

```shell
import { Observable } from 'rxjs';
```

## FHIR_Diagram
![FHIR_Diagram](https://user-images.githubusercontent.com/1216181/89124707-55298e80-d4d9-11ea-9d59-83107cfa3185.png)

## FHIR_UI
![FHIR_View](https://user-images.githubusercontent.com/1216181/89124724-78543e00-d4d9-11ea-8535-6ae571ecaf1e.png)
