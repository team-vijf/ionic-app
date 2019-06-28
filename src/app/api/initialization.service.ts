import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { environment } from 'src/environments/environment';

@Injectable()
export class InitializationService {

    public token;
    constructor(private http: Http) { }

    public initApp(): Promise<any> {
        const API_PATH = environment.requestAccessUrl;
        let headers = new Headers();
        return new Promise((resolve, reject) => {
            this.http.post(API_PATH, {
                uid: "webapp",
                shared_secret: "secret",
                type: "app"
            }).toPromise()
                .then(response => {
                    response = response.json();
                    this.token = response["token"];
                    console.log(this.token);
                    resolve(true);
                }, err => {
                });
        });
    }
}
export class Language {
    public translation: any;
    public language: string;
}
