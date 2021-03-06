import { Subject } from 'rxjs/Subject';
import { NotificationEvent } from '../interfaces/notification-event.type';
import { Notification } from '../interfaces/notification.type';
import { Icons } from '../interfaces/icons';
export declare class NotificationsService {
    emitter: Subject<NotificationEvent>;
    icons: Icons;
    set(notification: Notification, to: boolean): Notification;
    success(title?: any, content?: any, override?: any): Notification;
    error(title?: any, content?: any, override?: any): Notification;
    alert(title?: any, content?: any, override?: any): Notification;
    info(title?: any, content?: any, override?: any): Notification;
    warn(title?: any, content?: any, override?: any): Notification;
    bare(title?: any, content?: any, override?: any): Notification;
    create(title?: any, content?: any, type?: string, override?: any): Notification;
    html(html: any, type?: string, override?: any, icon?: string): Notification;
    remove(id?: string): void;
}
