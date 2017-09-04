var m = require('mithril'),
	count = 0;

var CountComponent = {
    view: () => {
        return m('h1', 'Really simple example of CRUD with Mithril');
    }    
}

module.exports = CountComponent;

// m('button', 
//                 {
//                     class: 'button button-default', 
//                     onclick: function() {
//                         count++;
//                     }
//                 }, 
//                 'Click me'
//             	),
//             	m('h5', {style: 'display: inline; margin-left: 10px'}, count),
//             	m('a', {href: '#!/splash', style: 'display: block'}, 'Go Back');