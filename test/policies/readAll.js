module.exports = {
  name: 'readAll',
  permissions: [
    { action: 'read', resource: 'user/' },
    { action: 'read', resource: 'user/{id}' },
    { action: 'read', resource: 'company/' },
    { action: 'read', resource: 'company/{id}' },
    { action: 'read', resource: 'account/' },
    { action: 'read', resource: 'account/{id}' },
    { action: 'read', resource: 'customer/' },
    { action: 'read', resource: 'customer/{id}' },
    { action: 'read', resource: 'contact/' },
    { action: 'read', resource: 'contact/{id}' }
  ]
}
