define(function() {

	'use strict';

	var FridayElements = function(elements) {
		this.elements = elements;
	};

	var friday = function(selector) {

		var elements = null;

		console.log('friday init called');

		if (selector === 'document') {
			elements = [document];
		} else if (selector === 'window') {
			elements = [window];
		} else {
			elements = document.querySelectorAll(selector);
		}

		return new FridayElements(elements);
	};

	FridayElements.prototype.addClass = function(class_name) {
		var i, j;
		var class_names = class_name.split(' ');
		for (i = 0; i < this.elements.length; i++) {
			for (j = 0; j < class_names.length; j++) {
				this.elements[i].classList.add(class_names[j]);
			}
		}
		return this;
	};

	FridayElements.prototype.attr = function(name, value) {
		var i;
		for (i = 0; i < this.elements.length; i++) {
			this.elements[i].setAttribute(name, value);
		}
		return this;
	};

	FridayElements.prototype.each = function(callback) {
		var i;
		if (!callback || typeof callback !== 'function') return;
		for (i = 0; i < this.elements.length; i++) {
			callback(this.elements[i], i);
		}
		return this;
	};

	FridayElements.prototype.on = function(events, handler) {
		var i, j;
		var event_list = events.split(' ');
		for (i = 0; i < this.elements.length; i++) {
			for (j = 0; j < event_list.length; j++) {
				this.elements[i].addEventListener(event_list[j], handler);
			}
		}
		return this;
	};

	FridayElements.prototype.removeAttr = function(names) {
		var i, j;
		var name_list = names.split(' ');
		for (i = 0; i < this.elements.length; i++) {
			for (j = 0; j < name_list.length; j++) {
				this.elements[i].removeAttribute(name_list[j]);
			}
		}
		return this;
	};

	FridayElements.prototype.removeClass = function(class_name) {
		var i, j;
		var class_names = class_name.split(' ');
		for (i = 0; i < this.elements.length; i++) {
			for (j = 0; j < class_names.length; j++) {
				this.elements[i].classList.remove(class_names[j]);
			}
		}
		return this;
	};

	FridayElements.prototype.text = function(new_text) {
		var i;
		var out_text = '';
		for (i = 0; i < this.elements.length; i++) {
			if (new_text) {
				this.elements[i].textContent = new_text;
			} else {
				out_text += this.elements[i].textContent;
			}
		}
		if (new_text) {
			return this;
		} else {
			return out_text;
		}
	};

	FridayElements.prototype.val = function(new_value) {
		var i;
		var vals = [];
		for (i = 0; i < this.elements.length; i++) {
			if (new_value) {
				this.elements[i].value = new_value;
			} else {
				vals.push(this.elements[i].value);
			}
		}

		if (new_value) {
			return this;
		} else {
			if (vals.length == 1) {
				return vals[0];
			} else {
				return vals;
			}
		}
	};

	friday.post = function(url, data) {
		var f = fetch(url, {
			'method': 'POST',
			'mode': 'cors',
			'cache': 'default',
			'credentials': 'include',
			'headers': {
				'Content-Type': 'application/json'
			},
			'redirect': 'follow',
			'referrer': 'no-referrer',
			'body': JSON.stringify(data),
		}).then((response) => response.json());

		return f;
	};

	return friday;
});

