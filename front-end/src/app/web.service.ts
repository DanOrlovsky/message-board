import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppConsts } from './shared/app-consts';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {

    private messageStore = [];
    private messageSubject = new Subject();

    messages = this.messageSubject.asObservable();

    constructor(
        private http: Http,
        private sb: MatSnackBar 
    ) {
        this.getMessages('');
    }
    async getMessages(userName: string) {
        userName = (userName) ? '/' + userName : '';
        try {        
            const response = await this.http.get(AppConsts.BaseMessagesUrl + userName).toPromise();  //.subscribe(response => {
            this.messageStore = response.json();                
            this.messageSubject.next(this.messageStore);
        //}, error => {
        } catch(error) {
            this.handleError("Unable to get messages");
        }
        //})
    }
    async postMessage(message) {
        try {
            const response = await this.http.post(AppConsts.BaseMessagesUrl, message).toPromise();
            this.messageStore.push(response.json());     
            this.messageSubject.next(this.messageStore);           
        } catch (error) {
            this.handleError("Unable to post messages")
        }
    }

    private handleError(error) {
        this.sb.open(error, 'close', { duration: 4000 });
        console.error(error)

    }
}