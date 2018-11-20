import { Directive, ElementRef, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Directive({
    selector: '[uppercase-directive]'
})
export class UpperCaseDirective implements OnInit {
    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        let element = this.el.nativeElement;
        let value = $(element).text();
        $(element).text(value.toUpperCase())
    }
}


// Menu directive
@Directive({
    selector: '[menu-directive]'
})
export class MnDirective implements OnInit {
    constructor(private el: ElementRef) {

    }
    ngOnInit() {
        let wrapper = this.el.nativeElement;
        $.each($(wrapper).find('button.accordion'), function () {
            $(this).click(function () {
                let parent = $(this).parent();
                let child = $(parent).find('.panel');
                $(child).toggleClass('show');

                let span = $(parent).find('.menu-item');
                $(span).toggleClass('show');
            })
        })
    }
}