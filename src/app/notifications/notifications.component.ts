import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Notification, NotificationType } from 'src/models/notification';
import { NotificationService } from 'src/services/notification.service';

const DURATION: number = 7; // IN SECONDS

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {

  notifications: Notification[] = [];

  subscription: Subscription;

  constructor(private notificationService: NotificationService) { }

  addNotification(toAdd: Notification): void {
    this.notifications.push(toAdd);

    setTimeout(() => this.close(toAdd), DURATION * 1000);
  }

  close(toClose: Notification): void {
    this.notifications = this.notifications.filter(notif => notif.id !== toClose.id);
  }

  className(notification: Notification): string {
    let style = "notification-success";
    
    switch (notification.type) {
      case NotificationType.ERROR: 
        style = "notification-error"
        break;
      case NotificationType.INFO: 
        style = "notification-info"
        break;
      case NotificationType.SUCCESS: 
        style = "notification-success"
        break;
    }

    return style;
  }

  ngOnInit(): void {
    this.subscription = this.notificationService.getObservable()
                          .subscribe(notification => this.addNotification(notification));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
