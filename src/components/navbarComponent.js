var m = require('mithril');

module.exports = {
    view: (vnode) => {
        return m('div', {class: 'twelve columns'}, [
            m('.navbar', [
                m('a', 
                {
                    class: 'button button-default nav-item',
                    href: '/home',
                    oncreate: m.route.link
                 }, 'Home'),
                m('a', 
                    {
                        class: 'button button-default nav-item',
                        href: '/list_rest',
                        oncreate: m.route.link
                     },'List')
            ])
        ], m('section', vnode.children));
    }    
}

