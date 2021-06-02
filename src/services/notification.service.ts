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

  createNotification(content: string, type: NotificationType): Notification {
    return {
      "id": this._idx++,
      content,
      type
    };
  }


  error(content: string) {
    if (!content) {
      return;
    }

    this._notifications.next(
      this.createNotification(content, NotificationType.ERROR));
  }

  success(content: string) {
    if (!content) {
      return;
    }

    this._notifications.next(
      this.createNotification(content, NotificationType.SUCCESS));
  }

  info(content: string) {
    if (!content) {
      return;
    }

    this._notifications.next(
      this.createNotification(content, NotificationType.INFO));
  }
}
