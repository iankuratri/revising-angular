import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(2000)]),
]);

export let slide = trigger('slide', [
  state('void', style({ opacity: 0, transform: 'translateX(-20px)' })),
  transition(':enter, :leave', [animate(500)]),
]);
