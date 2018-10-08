const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

// routes.add(name, 'url', 'folder-name/file-name')

routes.add('home', '/', '/')

routes.add('login', '/login', 'login')

routes.add('products', '/products', 'products')
routes.add('edit_product', '/products/:id/edit', 'products/edit')
routes.add('create_product', '/products/create', 'products/create')