import {Message} from './message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let simple_message = new Message({
      subject: 'hello',
      body: 'world'
    });
    expect(simple_message.subject).toEqual('hello');
    expect(simple_message.body).toEqual('world');
  });
});
