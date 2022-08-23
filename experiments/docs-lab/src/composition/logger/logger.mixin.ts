import { LitElement, PropertyValues } from 'lit';

type Constructor<T> = new (...args: any[]) => T;

export declare class LoggableInterface {
  loggerName: string;
}

export const LoggerMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class LoggerElement extends superClass {

    loggerName!: string;

    constructor() {
      super();
      console.log(`${this.loggerName}.constructor`);
    }

    connectedCallback() {
      super.connectedCallback();
      console.log(`${this.loggerName}.connectedCallback`);
    }

    updated(changedProps: PropertyValues): void {
      super.updated(changedProps);
      console.log(`${this.loggerName}.updated`);
    }

    disconnectedCallback() {
      super.disconnectedCallback();
      console.log(`${this.loggerName}.disconnectedCallback`);
    }

    // Add other methods here...
  }

  return LoggerElement as Constructor<LoggableInterface> & T;
};
