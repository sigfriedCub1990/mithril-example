var m = require('mithril'),
    Lesson = require('../models/LessonModel');

module.exports = {
    oninit: Lesson.loadList,
    view: function() {
        return m('table', {class: 'u-full-width'}, [
            m('thead', [
                m('tr', [
                    m('th', 'Name'),
                    m('th', 'Professor'),
                    m('th', '# of Students'),
                    m('th', 'Options')
                ])
            ]),
            m('tbody', [
	    		Lesson.list.map(function(lesson) {
	    			return m('tr', [
						m('td', lesson.name),
						m('td', lesson.professor),
						m('td', lesson.studentsNumber),
						m('td', [
							m('a.option-item', {href: '/create', oncreate: m.route.link}, 'Create'),
							m('a.option-item', {href: '/lessons/' + lesson.id, oncreate: m.route.link}, 'Edit'),
							m('a.option-item', {onclick: () => { Lesson.remove(lesson.id); m.redraw();}}, 'Delete')
						])
	    			])
	    		})
            ])
        ]);
    }
}

