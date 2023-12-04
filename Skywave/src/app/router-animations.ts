import { animate, query, style, transition, trigger } from "@angular/animations";




export const slide = trigger('routeAnimations', [
    transition('* => bottomSlide', [
        query(':enter', [
            style({
                position: "absolute",
                bottom: "-100%",
            }),
            animate('0.5s ease-out', style({
                position: "absolute",
                bottom: "22%"
            })), 
        ], { optional: true }),
    ]),
])