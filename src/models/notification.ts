export enum NotificationType {
    ERROR =  1,
    SUCCESS = 2,
    INFO = 3
}

export interface Notification {
    id: number;

    content: string;

    type: NotificationType;
}
