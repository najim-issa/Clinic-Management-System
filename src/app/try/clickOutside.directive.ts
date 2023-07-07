import { DOCUMENT }  from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output }  from '@angular/core';
import { Subscription, filter, fromEvent } from 'rxjs';

@Directive({
  selector: '[clickOutside]',

})
export class clickOutsideDirective implements AfterViewInit, OnDestroy{
    @Output() clickOutside = new EventEmitter<void> ();

    documentClickSubscription: Subscription | undefined;
constructor(private element: ElementRef, @Inject(Document) private document: Document){}

ngAfterViewInit(): void{
    this.documentClickSubscription=fromEvent(this.document,'click').pipe(
        filter((event)=>{
        return !this.isInside(event.target as HTMLElement);
    })

    ).subscribe(()=>{
this.clickOutside.emit();
    })
}

ngOnDestroy(): void {
    this.documentClickSubscription?.unsubscribe();
}
isInside(elementTochek: HTMLElement): boolean{
     return elementTochek== this.element.nativeElement ||this.element.nativeElement.contains(elementTochek)
}
}
