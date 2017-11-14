import { Component, Prop, Listen } from '@stencil/core';


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}

        <my-dropdown title="Toggle">
          Hello World
        </my-dropdown>
      </div>
    );
  }

  @Listen('onToggle')
  log(event) {
    console.log(event);
  }
}
