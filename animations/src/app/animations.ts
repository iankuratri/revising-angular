import {
  animate,
  animation,
  keyframes,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export let bounceOutLeftAnimation = animation(
  animate(
    '0.5s ease-out',
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: 'translateX(20px)' }),
      style({ offset: 1, opacity: 0, transform: 'translateX(-100%)' }),
    ])
  )
);

export let fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', [animate(2000)]),
]);

// export let slide = trigger('slide', [
//   state('void', style({ opacity: 0, transform: 'translateX(-20px)' })),
//   transition(':enter, :leave', [animate(500)]),
// ]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(500),
  ]),

  transition(':leave', useAnimation(bounceOutLeftAnimation)),
]);
