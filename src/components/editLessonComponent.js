var m = require('mithril'),
    Lesson = require('../models/LessonModel');

module.exports = {
    oninit: (vnode) => {Lesson.load(vnode.attrs.id)},
    view: () => {
        return m('form', {onsubmit: (e) => { e.preventDefault(); Lesson.update(); m.route.set('/list_rest');}}, [
            m('.row', [
                m('.twelve columns', [
                    m('label', {for: 'name'}, 'Lesson\'s name'),
                    m('input', {
                            value: Lesson.current.name, 
                            type: 'text', 
                            id: 'name',
                            oninput: m.withAttr('value', (value) => {
                                    Lesson.current.name = value;
                                }
                            ),
                        }
                    )
                ]),
                m('.twelve columns', [
                    m('label', {for: 'professor'}, 'Professor\'s name'),
                    m('input', {
                            value: Lesson.current.professor, 
                            type: 'text', 
                            id: 'professor',
                            oninput: m.withAttr('value', (value) => {Lesson.current.professor = value})
                        }
                    )
                ]),
                m('.twelve columns', [
                    m('label', {for: 'studentsNumber'}, 'Number of students'),
                    m('input', {
                            value: Lesson.current.studentsNumber, 
                            type: 'text', 
                            id: 'studentsNumber', 
                            oninput: m.withAttr('value', (value) => {Lesson.current.studentsNumber = value}),
                        }
                    )
                ]),
                m('.twelve columns', [
                    m('button.button-primary', {value: 'Submit', type: 'submit' }, 'Submit'),
                    m('button.button', {onclick: (e) => { e.preventDefault(); m.route.set('/list_rest');}, style: 'margin-left: 5px' }, 'Cancel')
                ])
            ])
        ])
    }
}