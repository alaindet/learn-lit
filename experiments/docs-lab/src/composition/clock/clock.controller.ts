import { ReactiveController, ReactiveControllerHost } from 'lit';

export class ClockController implements ReactiveController {

  host: ReactiveControllerHost;
  value!: number;
  interval!: number;

  private timer?: ReturnType<typeof setTimeout>;

  constructor(host: ReactiveControllerHost, interval = 1000) {
    (this.host = host).addController(this); // Register controller to host
    this.turnOnClock(interval);
  }

  hostConnected() {
    this.timer = setInterval(() => this.updateClock(), this.interval);
  }

  hostDisconnected() {
    this.turnOffClock();
  }

  private turnOnClock(interval: number): void {
    this.interval = interval;
    this.value = Date.now();
  }

  private updateClock(): void {
    this.value = Date.now();
    this.host.requestUpdate();
  }

  private turnOffClock(): void {
    clearInterval(this.timer);
    this.timer = undefined;
  }
}
