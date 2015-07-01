/*
	To use:
	var mediator = new PubSub();

	mediator.subscribe('my-message', function(data) {
		console.log('received: ' + data);
	});

	mediator.publish('my-message', { stuff: 'yo' });
*/

function PubSub() {
  this.events = {};
  return this;
}

PubSub.prototype.publish = function(msg, data) {
  if (this.events[msg]) {
    for (var i = 0, l = this.events[msg].length; i < l; i++) {
      this.events[msg][i](data);
    }
  }
};

PubSub.prototype.subscribe = function(msg, f) {
  if (!this.events[msg]) {
    this.events[msg] = [];
  }

  this.events[msg].push(f);
};