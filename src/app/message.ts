export class Message {
  id: string;
  subject: string = '';
  body: string = '';
  recipients: string[] = [];
  is_sent: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
