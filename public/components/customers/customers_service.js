App.factory('Customers', function ($resource, API_URL) {
  return $resource(API_URL + '/customers', {}, {
    methods: {
      save: {
        method: 'POST'
      }
    }
  })
})
