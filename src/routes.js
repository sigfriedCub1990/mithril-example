var m = require('mithril'),
    NavbarComponent = require('./components/navbarComponent'),
    ListComponent = require('./components/listComponent'),
    ListRestComponent = require('./components/restListComponent'),
    CountComponent = require('./components/countComponent'),
    EditLessonComponent = require('./components/editLessonComponent'),
    CreateLessonComponent = require('./components/createLessonComponent');

module.exports = {
    configureRoutes: function(root) {
        m.route(root, '/list', {
            '/home': {
                render: () => { return m(NavbarComponent, m(CountComponent)) }
            },
            '/list': {
                render: () => {
                    return m(NavbarComponent, m(ListComponent));
                }
            },
            '/list_rest': {
                render: () => {
                    return m(NavbarComponent, m(ListRestComponent));
                }
            },
            '/lessons/:id': {
                render: (vnode) => {
                    return m(NavbarComponent, m(EditLessonComponent, vnode.attrs));
                }
            },
            '/create': {
                render: () => {
                    return m(NavbarComponent, m(CreateLessonComponent));
                }
            }
        });
    }
}

