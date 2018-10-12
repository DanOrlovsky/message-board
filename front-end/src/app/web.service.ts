import { Http } from '@angular/http';
import { Injectable } from '@angular/core';



@Injectable()
export class WebService {
    constructor(private http: Http) {

    }
    getMessages() {
        return this.http.get('http://localhost:57946/api/messages').toPromise();
    }
    postMessage(message) {
        return this.http.post('http://localhost:57946/api/messages', message).toPromise();
    }
}