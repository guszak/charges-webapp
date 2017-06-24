App.factory('Charges', function ($resource, API_URL) {
  return $resource(API_URL + '/charges', {}, {
    methods: {
      save: {
        method: 'POST'
      }
    }
  })
})
