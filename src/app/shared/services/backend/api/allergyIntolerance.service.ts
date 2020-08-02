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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AllergyIntolerance } from '../model/allergyIntolerance';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class AllergyIntoleranceService {

    protected basePath = 'http://localhost:3000/4_0_0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     *
     * @param asserter
     * @param category
     * @param clinicalStatus
     * @param code
     * @param criticality
     * @param date
     * @param identifier
     * @param lastDate
     * @param manifestation
     * @param onset
     * @param patient
     * @param recorder
     * @param route
     * @param severity
     * @param type
     * @param verificationStatus
     * @param content
     * @param id
     * @param lastUpdated
     * @param profile
     * @param query
     * @param security
     * @param source
     * @param tag
     * @param text
     * @param format
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceGet(asserter?: string, category?: string, clinicalStatus?: string, code?: string, criticality?: string, date?: string, identifier?: string, lastDate?: string, manifestation?: string, onset?: string, patient?: string, recorder?: string, route?: string, severity?: string, type?: string, verificationStatus?: string, content?: string, id?: string, lastUpdated?: string, profile?: string, query?: string, security?: string, source?: string, tag?: string, text?: string, format?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<AllergyIntolerance>>;
    public allergyIntoleranceGet(asserter?: string, category?: string, clinicalStatus?: string, code?: string, criticality?: string, date?: string, identifier?: string, lastDate?: string, manifestation?: string, onset?: string, patient?: string, recorder?: string, route?: string, severity?: string, type?: string, verificationStatus?: string, content?: string, id?: string, lastUpdated?: string, profile?: string, query?: string, security?: string, source?: string, tag?: string, text?: string, format?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<AllergyIntolerance>>>;
    public allergyIntoleranceGet(asserter?: string, category?: string, clinicalStatus?: string, code?: string, criticality?: string, date?: string, identifier?: string, lastDate?: string, manifestation?: string, onset?: string, patient?: string, recorder?: string, route?: string, severity?: string, type?: string, verificationStatus?: string, content?: string, id?: string, lastUpdated?: string, profile?: string, query?: string, security?: string, source?: string, tag?: string, text?: string, format?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<AllergyIntolerance>>>;
    public allergyIntoleranceGet(asserter?: string, category?: string, clinicalStatus?: string, code?: string, criticality?: string, date?: string, identifier?: string, lastDate?: string, manifestation?: string, onset?: string, patient?: string, recorder?: string, route?: string, severity?: string, type?: string, verificationStatus?: string, content?: string, id?: string, lastUpdated?: string, profile?: string, query?: string, security?: string, source?: string, tag?: string, text?: string, format?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



























        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (asserter !== undefined && asserter !== null) {
            queryParameters = queryParameters.set('asserter', <any>asserter);
        }
        if (category !== undefined && category !== null) {
            queryParameters = queryParameters.set('category', <any>category);
        }
        if (clinicalStatus !== undefined && clinicalStatus !== null) {
            queryParameters = queryParameters.set('clinical-status', <any>clinicalStatus);
        }
        if (code !== undefined && code !== null) {
            queryParameters = queryParameters.set('code', <any>code);
        }
        if (criticality !== undefined && criticality !== null) {
            queryParameters = queryParameters.set('criticality', <any>criticality);
        }
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date);
        }
        if (identifier !== undefined && identifier !== null) {
            queryParameters = queryParameters.set('identifier', <any>identifier);
        }
        if (lastDate !== undefined && lastDate !== null) {
            queryParameters = queryParameters.set('last-date', <any>lastDate);
        }
        if (manifestation !== undefined && manifestation !== null) {
            queryParameters = queryParameters.set('manifestation', <any>manifestation);
        }
        if (onset !== undefined && onset !== null) {
            queryParameters = queryParameters.set('onset', <any>onset);
        }
        if (patient !== undefined && patient !== null) {
            queryParameters = queryParameters.set('patient', <any>patient);
        }
        if (recorder !== undefined && recorder !== null) {
            queryParameters = queryParameters.set('recorder', <any>recorder);
        }
        if (route !== undefined && route !== null) {
            queryParameters = queryParameters.set('route', <any>route);
        }
        if (severity !== undefined && severity !== null) {
            queryParameters = queryParameters.set('severity', <any>severity);
        }
        if (type !== undefined && type !== null) {
            queryParameters = queryParameters.set('type', <any>type);
        }
        if (verificationStatus !== undefined && verificationStatus !== null) {
            queryParameters = queryParameters.set('verification-status', <any>verificationStatus);
        }
        if (content !== undefined && content !== null) {
            queryParameters = queryParameters.set('_content', <any>content);
        }
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('_id', <any>id);
        }
        if (lastUpdated !== undefined && lastUpdated !== null) {
            queryParameters = queryParameters.set('_lastUpdated', <any>lastUpdated);
        }
        if (profile !== undefined && profile !== null) {
            queryParameters = queryParameters.set('_profile', <any>profile);
        }
        if (query !== undefined && query !== null) {
            queryParameters = queryParameters.set('_query', <any>query);
        }
        if (security !== undefined && security !== null) {
            queryParameters = queryParameters.set('_security', <any>security);
        }
        if (source !== undefined && source !== null) {
            queryParameters = queryParameters.set('_source', <any>source);
        }
        if (tag !== undefined && tag !== null) {
            queryParameters = queryParameters.set('_tag', <any>tag);
        }
        if (text !== undefined && text !== null) {
            queryParameters = queryParameters.set('_text', <any>text);
        }
        if (format !== undefined && format !== null) {
            queryParameters = queryParameters.set('_format', <any>format);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<AllergyIntolerance>>(`${this.basePath}/AllergyIntolerance`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param count
     * @param since
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceHistoryGet(count?: string, since?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public allergyIntoleranceHistoryGet(count?: string, since?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public allergyIntoleranceHistoryGet(count?: string, since?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public allergyIntoleranceHistoryGet(count?: string, since?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('_count', <any>count);
        }
        if (since !== undefined && since !== null) {
            queryParameters = queryParameters.set('_since', <any>since);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/AllergyIntolerance/_history`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceIdDelete(id: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public allergyIntoleranceIdDelete(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public allergyIntoleranceIdDelete(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public allergyIntoleranceIdDelete(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling allergyIntoleranceIdDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete<any>(`${this.basePath}/AllergyIntolerance/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceIdGet(id: string, observe?: 'body', reportProgress?: boolean): Observable<AllergyIntolerance>;
    public allergyIntoleranceIdGet(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllergyIntolerance>>;
    public allergyIntoleranceIdGet(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllergyIntolerance>>;
    public allergyIntoleranceIdGet(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling allergyIntoleranceIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<AllergyIntolerance>(`${this.basePath}/AllergyIntolerance/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param count
     * @param since
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceIdHistoryGet(id: string, count?: string, since?: string, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public allergyIntoleranceIdHistoryGet(id: string, count?: string, since?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public allergyIntoleranceIdHistoryGet(id: string, count?: string, since?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public allergyIntoleranceIdHistoryGet(id: string, count?: string, since?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling allergyIntoleranceIdHistoryGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (count !== undefined && count !== null) {
            queryParameters = queryParameters.set('_count', <any>count);
        }
        if (since !== undefined && since !== null) {
            queryParameters = queryParameters.set('_since', <any>since);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<any>(`${this.basePath}/AllergyIntolerance/${encodeURIComponent(String(id))}/_history`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param vid
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceIdHistoryVidGet(id: string, vid: string, observe?: 'body', reportProgress?: boolean): Observable<AllergyIntolerance>;
    public allergyIntoleranceIdHistoryVidGet(id: string, vid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllergyIntolerance>>;
    public allergyIntoleranceIdHistoryVidGet(id: string, vid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllergyIntolerance>>;
    public allergyIntoleranceIdHistoryVidGet(id: string, vid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling allergyIntoleranceIdHistoryVidGet.');
        }

        if (vid === null || vid === undefined) {
            throw new Error('Required parameter vid was null or undefined when calling allergyIntoleranceIdHistoryVidGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<AllergyIntolerance>(`${this.basePath}/AllergyIntolerance/${encodeURIComponent(String(id))}/_history/${encodeURIComponent(String(vid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param id
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntoleranceIdPut(id: string, body?: AllergyIntolerance, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public allergyIntoleranceIdPut(id: string, body?: AllergyIntolerance, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public allergyIntoleranceIdPut(id: string, body?: AllergyIntolerance, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public allergyIntoleranceIdPut(id: string, body?: AllergyIntolerance, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling allergyIntoleranceIdPut.');
        }


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<any>(`${this.basePath}/AllergyIntolerance/${encodeURIComponent(String(id))}`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     *
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public allergyIntolerancePost(body?: AllergyIntolerance, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public allergyIntolerancePost(body?: AllergyIntolerance, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public allergyIntolerancePost(body?: AllergyIntolerance, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public allergyIntolerancePost(body?: AllergyIntolerance, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/AllergyIntolerance`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
