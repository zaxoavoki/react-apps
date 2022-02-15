import { writeFile } from 'fs';
import data from './data.json';

const FILE_PATH = '../server/datastore/data.json';
const LIMIT_PER_PAGE = 10;

function updateFile(data: any): Promise<any> {
  return new Promise((res, rej) => {
    writeFile(FILE_PATH, JSON.stringify(data), err => {
      if (err) {
        rej('Something went wrong');
      }
      res();
    });
  });
}

export function getMeteors(
  page: number,
  sort: [string, string],
  important: boolean,
  fell: boolean,
): Promise<any> {
  const [field = null, order = null] = sort;

  let arr = [...data.data];
  if (important) arr = arr.filter((e: any) => e.important === important);
  if (fell) arr = arr.filter((e: any) => e.fall === 'Found');

  if (field) {
    arr.sort((a: any, b: any): number | any => {
      if (field === 'mass') {
        // sort by number
        return order === 'asc'
          ? a.mass - b.mass
          : order === 'desc'
          ? b.mass - a.mass
          : 0;
      } else if (field === 'date') {
        // sort by date
        const a_ = new Date(a.date).getTime();
        const b_ = new Date(b.date).getTime();
        return order === 'asc' ? a_ - b_ : order === 'desc' ? b_ - a_ : 0;
      } else if (field === 'important') {
        // sort by: true, false, undefined
        if (order === 'asc') return !!a[field] > !!b[field] ? 1 : -1;
        if (order === 'desc') return !!b[field] > !!a[field] ? 1 : -1;
      } else {
        // sort by other field: name
        if (order === 'asc') return a[field] > b[field] ? 1 : -1;
        if (order === 'desc') return b[field] > a[field] ? 1 : -1;
      }
      return;
    });
  }

  page = Math.abs(page || 1);
  if (arr.length < LIMIT_PER_PAGE) {
    page = 1;
  }

  const part = arr.slice(LIMIT_PER_PAGE * (page - 1), LIMIT_PER_PAGE * page);
  return Promise.resolve({
    data: part,
    count: Math.floor(arr.length / LIMIT_PER_PAGE),
  });
}

function validateMeteor(meteor: any): boolean {
  return !(
    (meteor.fall !== 'Found' && meteor.fall !== 'Fell') ||
    !parseFloat(meteor.mass) ||
    meteor.name === '' ||
    !Date.parse(meteor.date)
  );
}

export function getMeteor(id: string): Promise<any> {
  const idx = data.data.findIndex(e => e.id === id);
  return Promise.resolve(idx === -1 ? false : data.data[idx]);
}

export async function addMeteor(meteor: any): Promise<any> {
  data.data.push(meteor);
  if (!validateMeteor(meteor)) {
    return false;
  }
  await updateFile(data);
  return meteor;
}

export async function updateMeteor(id: string, meteor: any): Promise<any> {
  const idx = data.data.findIndex(e => e.id === id);
  data.data[idx] = { ...data.data[idx], ...meteor };
  if (!validateMeteor(data.data[idx])) {
    return false;
  }
  await updateFile(data);
  return data.data[idx];
}

export async function removeMeteor(id: string): Promise<any> {
  data.data = data.data.filter(e => e.id !== id);
  await updateFile(data);
  return true;
}

// true false undefined
