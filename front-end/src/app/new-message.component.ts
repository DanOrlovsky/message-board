import {Component } from '@angular/core';
import { WebService } from './web.service';


@Component({
    selector: 'new-message',
    template: `
            <mat-card class="card">
                <mat-card-content>
                    <div class='form'>
                        <mat-form-field class="form-full">
                            <input matInput placeholder="Name" [(ngModel)]="message.owner">
                        </mat-form-field>
                        <mat-form-field class="form-full">
                            <textarea matInput placeholder="Message" [(ngModel)]="message.text"></textarea>
                        </mat-form-field>
                        <mat-card-actions>
                            <button mat-button color="primary" (click)="post()">Post</button>
                        </mat-card-actions>
                    </div>
                </mat-card-content>
            </mat-card>
        `
    }
)

export class NewMessageComponent {

    
    message = {
        owner:  "",
        text: ""
    }

    constructor(private webService: WebService) {

    }


    async post() {
        await this.webService.postMessage(this.message);
    }
}
