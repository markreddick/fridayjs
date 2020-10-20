define(function() {

	'use strict';

	/*
	class ZippyElements  {
		constructor(elements) {
			this.elements = elements;
		}
	};

	var zippy_elements = function(elements) {
		this.elements = elements;
	}

	zippy_elements.prototype.addClass = function (class_name) {
		var class_names = class_name.split(' ');
		for (var i = 0; i < this.elements.length; i++) {
			for (var j = 0; j < class_names.length; j++) {
				this.elements[i].classList.add(class_names[j]);
			}
		}
		return this;
	};

	zippy_elements.prototype.attr = function(name, value) {
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].setAttribute(name, value);
		}
		return this;
	}

	zippy_elements.prototype.each = function(callback) {
		if (!callback || typeof callback !== 'function') return;
		for (var i = 0; i < this.elements.length; i++) {
			callback(this.elements[i], i);
		}
		return this;
	};

	zippy_elements.prototype.on = function(events, handler) {
		var event_list = events.split(' ');
		for (var i = 0; i < this.elements.length; i++) {
			for (var j = 0; j < event_list.length; j++) {
				this.elements[i].addEventListener(event_list[j], handler);
			}
		}
		return this;
	};

	zippy_elements.prototype.removeAttr = function(names) {
		var name_list = names.split(' ');
		for (var i = 0; i < this.elements.length; i++) {
			for (var j = 0; j < name_list.length; j++) {
				this.elements[i].removeAttribute(name_list[j]);
			}
		}
		return this;
	}

	zippy_elements.prototype.removeClass = function(class_name) {
		var class_names = class_name.split(' ');
		for (var i = 0; i < this.elements.length; i++) {
			for (var j = 0; j < class_names.length; j++) {
				this.elements[i].classList.remove(class_names[j]);
			}
		};
		return this;
	};

	zippy_elements.prototype.text = function(new_text) {
		var out_text = '';
		for (var i = 0; i < this.elements.length; i++) {
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
	}

	zippy_elements.prototype.val = function (new_value) {
		var vals = [];
		for (var i = 0; i < this.elements.length; i++) {
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
	}

	var zippy = function(selector) {

		var elements = null;

		if (selector === 'document') {
			elements = [document];
		} else if (selector === 'window') {
			elements = [window];
		} else {
			elements = document.querySelectorAll(selector);
		}

		return new zippy_elements(elements);
	};

	zippy.post = function(url, data) {
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
		})
		.then(response => response.json());

		return f;
	};

	return zippy;
	*/

	var friday = function(selector) {

		var elements = null;
		var i, j;

		var addClass = function(class_name) {

			var class_names = class_name.split(' ');
			for (i = 0; i < elements.length; i++) {
				for (j = 0; j < class_names.length; j++) {
					elements[i].classList.add(class_names[j]);
				}
			}
		};

		if (selector === 'document') {
			elements = [document];
		} else if (selector === 'window') {
			elements = [window];
		} else {
			elements = document.querySelectorAll(selector);
		}

		return {
			addClass: addClass,
		};
	};

	return friday;
});

