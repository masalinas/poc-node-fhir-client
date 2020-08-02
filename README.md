# Description
FHIR Angular Client PoC 

# Start FHIR Server from Asymmetrik github repository
git clone https://github.com/Asymmetrik/node-fhir-server-mongo.git
cd node-fhir-server-mongo
yarn
yarn start

# install swagger FHIR contract generator
npm install -g fhir-swagger

# generate FHIR R4 swagger contract
fhir-swagger --fhir_url "http://localhost:3000/4_0_0" --conformance_path="/metadata?_format=application/json" --r4 --output swagger.json

# install openapi generator
wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0-beta/openapi-generator-cli-5.0.0-beta.jar -O openapi-generator-cli.jar

# generate angular 2.X services from contract
java -jar swagger-codegen-cli.jar generate -i swagger.json -l typescript-angular

# create a simple angular project
ng new fhir-client-poc

# Program your App ...
