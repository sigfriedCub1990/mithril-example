var m = require('mithril');

module.exports = {
    view: function() {
        return m('div', {class: 'six columns'}, [
              m('ul', [
                m('li', 'Learn the basics'),
                m('li', 'How does components work'),
                m('li', 'Separation of concerns'),
                m('li', 'Consuming REST services'),
              ])
        ]);
    }
}
