import { Component, OnChanges, Input,
        Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent{
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86/5; //86 pixels wide & 5 stars
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`)
    }
}