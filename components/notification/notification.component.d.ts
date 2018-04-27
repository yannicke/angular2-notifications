import { ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Notification } from '../../interfaces/notification.type';
import { NotificationsService } from '../../services/notifications.service';
export declare class NotificationComponent implements OnInit, OnDestroy {
    private notificationService;
    private domSanitizer;
    private cdr;
    private zone;
    timeOut: number;
    showProgressBar: boolean;
    pauseOnHover: boolean;
    clickToClose: boolean;
    clickIconToClose: boolean;
    maxLength: number;
    theClass: string;
    rtl: boolean;
    animate: string;
    position: number;
    item: Notification;
    title: any;
    content: any;
    titleIsTemplate: boolean;
    contentIsTemplate: boolean;
    htmlIsTemplate: boolean;
    progressWidth: number;
    safeSvg: SafeHtml;
    private stopTime;
    private timer;
    private steps;
    private speed;
    private count;
    private start;
    private diff;
    private icon;
    constructor(notificationService: NotificationsService, domSanitizer: DomSanitizer, cdr: ChangeDetectorRef, zone: NgZone);
    ngOnInit(): void;
    startTimeOut(): void;
    onEnter(): void;
    onLeave(): void;
    onClick($e: MouseEvent): void;
    onClickIcon($e: MouseEvent): void;
    attachOverrides(): void;
    ngOnDestroy(): void;
    private instance;
    private remove();
    private contentType(item, key);
}