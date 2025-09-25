import { Event } from "./event";

export class Store<Value> {
  public value: Value;

  private changeEvent = new Event();

  constructor(public initialValue: Value) {
    this.value = initialValue;
  }

  onChange(callback: () => void) {
    return this.changeEvent.addListener(callback);
  }

  setValue(value: Value) {
    this.value = value;

    this.changeEvent.emit();
  }

  reset() {
    this.value = this.initialValue;

    this.changeEvent.emit();
  }
}
