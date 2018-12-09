let baseUrl = process.env.REACT_APP_API_URL

export function getCats() {
  return makeRequest('/cats')
}

export function postCat(cat) {
  console.log(baseUrl)
  return makeRequest('/cats', 'post', cat).catch(err => console.error(err))
}

export function patchCat(cat) {
  return makeRequest(`/cats/${cat._id}`, 'patch', cat).catch(err =>
    console.error(err)
  )
}

export function deleteCat(id) {
  return makeRequest(`/cats/${id}`, 'delete').catch(err => console.error(err))
}

function makeRequest(path, method = 'get', body) {
  path = path.startsWith('/') ? path : '/' + path
  baseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  body = JSON.stringify(body)

  return fetch(baseUrl + path, {
    method: method.toUpperCase(),
    headers: ['post', 'patch'].includes(method)
      ? { 'Content-Type': 'application/json' }
      : {},
    body
  })
    .then(res => res.json())
    .catch(err => console.error(err))
}
