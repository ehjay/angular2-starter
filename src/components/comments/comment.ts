import { Input, Component } from 'angular2/core';

@Component({
  selector: 'rio-comment',
  template: `
    <div>
      {{text}}-{{author}}
    </div>
  `
})
export class RioComment {
  @Input() author: string;
  @Input() text: string;
};
