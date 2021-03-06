//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.15.10.0 (NJsonSchema v10.6.10.0 (Newtonsoft.Json v9.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

export class EventsClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
      this.http = http ? http : window as any;
      this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:5000";
  }

  get(userReference: string, date: string | undefined): Promise<EventDTO> {
      let url_ = this.baseUrl + "/api/Events/{userReference}?";
      if (userReference === undefined || userReference === null)
          throw new Error("The parameter 'userReference' must be defined.");
      url_ = url_.replace("{userReference}", encodeURIComponent("" + userReference));
      if (date === null)
          throw new Error("The parameter 'date' cannot be null.");
      else if (date !== undefined)
          url_ += "date=" + encodeURIComponent("" + date) + "&";
      url_ = url_.replace(/[?&]$/, "");

      let options_: RequestInit = {
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processGet(_response);
      });
  }

  protected processGet(response: Response): Promise<EventDTO> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as EventDTO;
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<EventDTO>(null as any);
  }

  post(newEvent: EventDTO): Promise<EventDTO> {
      let url_ = this.baseUrl + "/api/Events";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(newEvent);

      let options_: RequestInit = {
          body: content_,
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processPost(_response);
      });
  }

  protected processPost(response: Response): Promise<EventDTO> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as EventDTO;
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<EventDTO>(null as any);
  }

  getAll(): Promise<EventDTO[]> {
      let url_ = this.baseUrl + "/api/Events";
      url_ = url_.replace(/[?&]$/, "");

      let options_: RequestInit = {
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processGetAll(_response);
      });
  }

  protected processGetAll(response: Response): Promise<EventDTO[]> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as EventDTO[];
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<EventDTO[]>(null as any);
  }
}

export class UsersClient {
  private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
  private baseUrl: string;
  protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

  constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
      this.http = http ? http : window as any;
      this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "http://localhost:5000";
  }

  get(): Promise<UserDTO[]> {
      let url_ = this.baseUrl + "/api/Users";
      url_ = url_.replace(/[?&]$/, "");

      let options_: RequestInit = {
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processGet(_response);
      });
  }

  protected processGet(response: Response): Promise<UserDTO[]> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as UserDTO[];
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<UserDTO[]>(null as any);
  }

  getById(id: string | null): Promise<UserDTO> {
      let url_ = this.baseUrl + "/api/Users/{id}";
      if (id === undefined || id === null)
          throw new Error("The parameter 'id' must be defined.");
      url_ = url_.replace("{id}", encodeURIComponent("" + id));
      url_ = url_.replace(/[?&]$/, "");

      let options_: RequestInit = {
          method: "GET",
          headers: {
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processGetById(_response);
      });
  }

  protected processGetById(response: Response): Promise<UserDTO> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as UserDTO;
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<UserDTO>(null as any);
  }

  login(userParam: UserLoginDTO): Promise<UserDTO> {
      let url_ = this.baseUrl + "/api/Users/login";
      url_ = url_.replace(/[?&]$/, "");

      const content_ = JSON.stringify(userParam);

      let options_: RequestInit = {
          body: content_,
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          }
      };

      return this.http.fetch(url_, options_).then((_response: Response) => {
          return this.processLogin(_response);
      });
  }

  protected processLogin(response: Response): Promise<UserDTO> {
      const status = response.status;
      let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
      if (status === 200) {
          return response.text().then((_responseText) => {
          let result200: any = null;
          result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as UserDTO;
          return result200;
          });
      } else if (status !== 200 && status !== 204) {
          return response.text().then((_responseText) => {
          return throwException("An unexpected server error occurred.", status, _responseText, _headers);
          });
      }
      return Promise.resolve<UserDTO>(null as any);
  }
}

export interface EventDTO {
  id: string;
  startDate: string;
  endDate: string;
  userReference: string;
}

export interface UserDTO {
  id: string;
  fullName: string;
  userName: string;
  primaryColor: string;
  secondaryColor: string;
}

export interface UserLoginDTO {
  userName: string;
  password: string;
}

export class ApiException extends Error {
  override message: string;
  status: number;
  response: string;
  headers: { [key: string]: any; };
  result: any;

  constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
      super();

      this.message = message;
      this.status = status;
      this.response = response;
      this.headers = headers;
      this.result = result;
  }

  protected isApiException = true;

  static isApiException(obj: any): obj is ApiException {
      return obj.isApiException === true;
  }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
  if (result !== null && result !== undefined)
      throw result;
  else
      throw new ApiException(message, status, response, headers, null);
}
