import {
  getMeteors as getAll,
  addMeteor as add,
  getMeteor as getOne,
  updateMeteor as update,
  removeMeteor as remove,
} from '../../datastore';

export function getMeteors(req: any, res: any): void {
  const { page, field, order, important, fell } = req.query;
  getAll(page, [field, order], important === 'true', fell === 'true')
    .then(meteors => res.status(200).json(meteors))
    .catch(() => res.status(200).json({ error: 'Something went wrong.' }));
}

export function getMeteor(req: any, res: any): void {
  getOne(req.params.id)
    .then(meteor => res.status(200).json(meteor))
    .catch(() => res.status(200).json({ error: 'Meteor was not found.' }));
}

export function addMeteor(req: any, res: any): void {
  add(req.body)
    .then(meteor => res.status(200).json(meteor))
    .catch(() => res.status(200).json({ error: 'Invalid data.' }));
}

export function removeMeteor(req: any, res: any): void {
  remove(req.params.id)
    .then(meteor => res.status(200).json(meteor))
    .catch(() => res.status(200).json({ error: 'Meteor was not found.' }));
}

export function updateMeteor(req: any, res: any): void {
  update(req.params.id, req.body)
    .then(meteor => res.status(200).json(meteor))
    .catch(() => res.status(200).json({ error: 'Meteor was not found.' }));
}
