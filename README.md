# Description
[Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/index.html) Angular Client PoC

## Start FHIR Server from Asymmetrik github repository
```shell
git clone https://github.com/Asymmetrik/node-fhir-server-mongo.git
cd node-fhir-server-mongo
yarn
yarn start
```

Disable CORS check from server config file on src/config.js

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
## Add a patient using Postman
```javascript
{
  "resourceType": "Patient",
  "id": "example",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\t\t\t<table>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Name</td>\n\t\t\t\t\t\t<td>Peter James \n              <b>Chalmers</b> (&quot;Jim&quot;)\n            </td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Address</td>\n\t\t\t\t\t\t<td>534 Erewhon, Pleasantville, Vic, 3999</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Contacts</td>\n\t\t\t\t\t\t<td>Home: unknown. Work: (03) 5555 6473</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Id</td>\n\t\t\t\t\t\t<td>MRN: 12345 (Acme Healthcare)</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>"
  },
  "identifier": [
    {
      "use": "usual",
      "type": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
            "code": "MR"
          }
        ]
      },
      "system": "urn:oid:1.2.36.146.595.217.0.1",
      "value": "12345",
      "period": {
        "start": "2001-05-06"
      },
      "assigner": {
        "display": "Acme Healthcare"
      }
    }
  ],
  "active": true,
  "name": [
    {
      "use": "official",
      "family": "Chalmers",
      "given": [
        "Peter",
        "James"
      ]
    },
    {
      "use": "usual",
      "given": [
        "Jim"
      ]
    },
    {
      "use": "maiden",
      "family": "Windsor",
      "given": [
        "Peter",
        "James"
      ],
      "period": {
        "end": "2002"
      }
    }
  ],
  "telecom": [
    {
      "use": "home"
    },
    {
      "system": "phone",
      "value": "(03) 5555 6473",
      "use": "work",
      "rank": 1
    },
    {
      "system": "phone",
      "value": "(03) 3410 5613",
      "use": "mobile",
      "rank": 2
    },
    {
      "system": "phone",
      "value": "(03) 5555 8834",
      "use": "old",
      "period": {
        "end": "2014"
      }
    }
  ],
  "gender": "male",
  "birthDate": "1974-12-25",
  "_birthDate": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-birthTime",
        "valueDateTime": "1974-12-25T14:35:45-05:00"
      }
    ]
  },
  "deceasedBoolean": false,
  "address": [
    {
      "use": "home",
      "type": "both",
      "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999",
      "line": [
        "534 Erewhon St"
      ],
      "city": "PleasantVille",
      "district": "Rainbow",
      "state": "Vic",
      "postalCode": "3999",
      "period": {
        "start": "1974-12-25"
      }
    }
  ],
  "contact": [
    {
      "relationship": [
        {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0131",
              "code": "N"
            }
          ]
        }
      ],
      "name": {
        "family": "du Marché",
        "_family": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/humanname-own-prefix",
              "valueString": "VV"
            }
          ]
        },
        "given": [
          "Bénédicte"
        ]
      },
      "telecom": [
        {
          "system": "phone",
          "value": "+33 (237) 998327"
        }
      ],
      "address": {
        "use": "home",
        "type": "both",
        "line": [
          "534 Erewhon St"
        ],
        "city": "PleasantVille",
        "district": "Rainbow",
        "state": "Vic",
        "postalCode": "3999",
        "period": {
          "start": "1974-12-25"
        }
      },
      "gender": "female",
      "period": {
        "start": "2012"
      }
    }
  ],
  "managingOrganization": {
    "reference": "Organization/1"
  }
}
```

![FHIR_Postman_01](https://user-images.githubusercontent.com/1216181/89124911-d9304600-d4da-11ea-97e7-59a23a4ab1fd.png)
![FHIR_Postman_02](https://user-images.githubusercontent.com/1216181/89124918-e2211780-d4da-11ea-9841-bf96409b953f.png)

## MongoDB Database
![FHIR_Mongo](https://user-images.githubusercontent.com/1216181/89125091-41335c00-d4dc-11ea-9285-739f81dfc10c.png)

## FHIR_Diagram
![FHIR_Diagram](https://user-images.githubusercontent.com/1216181/89124707-55298e80-d4d9-11ea-9d59-83107cfa3185.png)

## FHIR_UI
![FHIR_View](https://user-images.githubusercontent.com/1216181/89124724-78543e00-d4d9-11ea-8535-6ae571ecaf1e.png)
