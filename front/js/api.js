const server = 'http://localhost:3000';

async function create(path, wifi) {
  const res = await fetch(`${server}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wifi),
  });

  return await res.json();
}

async function read(path) {
  const res = await fetch(`${server}${path}`);

  return await res.json();
}

async function readById(path, ssid) {
  const res = await fetch(`${server}${path}/${ssid}`);

  return await res.json();
}

async function update(path, wifi, ssid) {
  const res = await fetch(`${server}${path}/${ssid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(wifi),
  });

  return await res.json();
}

async function remove(path, ssid) {
  const res = await fetch(`${server}${path}/${ssid}`, {
    method: 'DELETE',
  });

  return await res.json();
}

export default {
  create,
  read,
  readById,
  update,
  remove,
};