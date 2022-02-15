const API_URL = 'http://localhost:4000';

export function getMeteors(options) {
  const query = `page=${options.page}&fell=${options.fallen}&important=${options.important}&field=${options.sort.field}&order=${options.sort.order}`;
  return fetch(`${API_URL}/meteorites?${query}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
}

export function updateMeteor(id, meteorData) {
  return fetch(`${API_URL}/meteorites/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(meteorData),
  }).then(res => res.json());
}
