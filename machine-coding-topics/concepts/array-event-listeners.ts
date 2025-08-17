type EventTypes = 'add' | 'remove';

type EventCallback = (
  type: EventTypes,
  data: unknown,
  array: ArrayWithListeners
) => void;

class ArrayWithListeners extends Array {
  private events: Record<EventTypes, Array<EventCallback>>;

  constructor() {
    super();
    this.events = {} as Record<EventTypes, Array<EventCallback>>;
  }

  addListener(type: EventTypes, cb: EventCallback) {
    if (!this.events[type]) this.events[type] = [];
    this.events[type].push(cb);
    // return {
    //   removeListener: () => this.removeListener(type, cb),
    // };
  }

  removeListener(type: EventTypes, cb: EventCallback) {
    if (this.events[type])
      this.events[type] = this.events[type].filter((i) => i !== cb);
  }

  pushWithEvent(type, ...data) {
    this.push(data);
    this.update(type, data);
  }

  popWithEvent(type) {
    const x = this.pop();
    this.update(type, x);
  }

  private update(type, data) {
    this.events[type].forEach((cb) => {
      cb(type, data, this);
    });
  }
}

const arr = new ArrayWithListeners();

function add(eventName, items, array) {
  console.log(
    `items were added with name ${eventName} and array ${array}`,
    items
  );
}

const _lst = arr.addListener('add', add);

function remove(eventName, item, array) {
  console.log(item, ` was removed with event ${eventName} and array ${array}`);
}

arr.addListener('remove', remove);

arr.removeListener('remove', remove);
// lst.removeListener();

arr.pushWithEvent('add', 4);
arr.pushWithEvent('add', 3);
arr.pushWithEvent('add', 5);
arr.popWithEvent('remove');
