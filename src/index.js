var m = require('mithril'),
    root = document.getElementById('main-content'),
    routes = require('./routes');

routes.configureRoutes(root);
