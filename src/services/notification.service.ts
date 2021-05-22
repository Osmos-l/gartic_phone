import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification, NotificationType } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  _notifications: Subject<Notification> = new Subject();

  private _idx: number = 0;

  constructor() { }

  getObservable(): Observable<Notification> {
    return this._notifications.asObservable();
  }

  error(content: string) {
    const notification: Notification = {
      "id": this._idx++,
      content,
      "type": NotificationType.ERROR
    };
    this._notifications.next(notification);
  }

  success(content: string) {
    const notification: Notification = {
      "id": this._idx++,
      content,
      "type": NotificationType.SUCCESS
    };
    this._notifications.next(notification);
  }

  info(content: string) {
    const notification: Notification = {
      "id": this._idx++,
      content,
      "type": NotificationType.INFO
    };
    this._notifications.next(notification);
  }
}
