import {Component, Output, EventEmitter } from '@angular/core';
import { WebService } from './web.service';


@Component({
    selector: 'new-message',
    template: `
            <mat-card class="card">
                <mat-card-content>
                    <mat-form-field>
                        <input matInput placeholder="Name" [(ngModel)]="message.owner">
                    </mat-form-field><br />
                    <mat-form-field>
                        <textarea matInput placeholder="Message" [(ngModel)]="message.text"></textarea>
                    </mat-form-field>
                    <mat-card-actions>
                        <button mat-button color="primary" (click)="post()">Post</button>
                    </mat-card-actions>
                </mat-card-content>
            </mat-card>
        `
})

export class NewMessageComponent {

    @Output() onPost = new EventEmitter();
    
    message = {
        owner:  "",
        text: ""
    }

    constructor(private webService: WebService) {

    }


    async post() {
        await this.webService.postMessage(this.message);
        this.onPost.emit();
    }
}
