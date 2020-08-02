# Description
FHIR Angular Client PoC 

## Start FHIR Server from Asymmetrik github repository
```shell
git clone https://github.com/Asymmetrik/node-fhir-server-mongo.git
cd node-fhir-server-mongo
yarn
yarn start
```

## install swagger FHIR contract generator
```shell
npm install -g fhir-swagger
```

## generate FHIR R4 swagger contract
```shell
fhir-swagger --fhir_url "http://localhost:3000/4_0_0" --conformance_path="/metadata?_format=application/json" --r4 --output swagger.json
```

## install openapi generator
```shell
wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0-beta/openapi-generator-cli-5.0.0-beta.jar -O openapi-generator-cli.jar
```

## generate angular 2.X services from contract
```shell
java -jar swagger-codegen-cli.jar generate -i swagger.json -l typescript-angular
```

## create a simple angular project
```shell
ng new fhir-client-poc
```

## Program your App ...
