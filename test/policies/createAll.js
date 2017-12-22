module.exports = {
  name: 'createAll',
  permissions: [
    { action: 'create', resource: 'user/' },
    { action: 'create', resource: 'company/' },
    { action: 'create', resource: 'account/' },
    { action: 'create', resource: 'customer/' },
    { action: 'create', resource: 'contact/' }
  ]
}
