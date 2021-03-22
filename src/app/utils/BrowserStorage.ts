export abstract class BrowserStorage {
  abstract getData(key: string): any;
  abstract setData(key: string, value: any): void;
  abstract clearData(key: string): void;
}
