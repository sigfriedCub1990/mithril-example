var m = require('mithril');

var Lesson = {
	list: [],
	current: {},
	loadList: () => {
		return m.request({
			method: 'GET',
			url: 'http://localhost:2403/lessons'
		}).then((data) => {
			Lesson.list = data;
		});
	},
	load: (id) => {
		m.request({
			method: 'GET',
			url: 'http://localhost:2403/lessons/' + id
		}).then((lesson) => {
			Lesson.current = lesson;
		});
	},
	update: () => {
		m.request({
			method: 'PUT',
			url: 'http://localhost:2403/lessons/' + Lesson.current.id,
			data: Lesson.current
		}).then((response) => {
			console.log(response);
		});
	},
	create: () => {
		m.request({
			method: 'POST',
			url: 'http://localhost:2403/lessons',
			data: Lesson.current
		}).then((response) => {
			console.log(response);
		});
	},
	remove: (id) => {
		m.request({
			method: 'DELETE',
			url: 'http://localhost:2403/lessons/' + id
		}).then((response) => {
			console.log(response);
		});
	}
}

module.exports = Lesson;
