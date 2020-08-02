/**
 * Untitled
 * Fast Healthcare Interoperability Resources (FHIR, pronounced \"Fire\") defines a set of \"Resources\" that represent granular clinical concepts. The resources can be managed in isolation, or aggregated into complex documents. Technically, FHIR is designed for the web; the resources are based on simple XML or JSON structures, with an http-based RESTful protocol where each resource has predictable URL. Where possible, open internet standards are used for data representation.  
 *
 * OpenAPI spec version: unspecified
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AccountTypeCoding } from './accountTypeCoding';


export interface AllergyIntoleranceClinicalStatus { 
    coding: Array<AccountTypeCoding>;
}
