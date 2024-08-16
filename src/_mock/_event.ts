import dayjs from 'dayjs';
import cloneDeep from 'lodash/cloneDeep';

import { fSub, fAdd } from 'src/utils/format-time';

import { _mock } from 'src/_mock';

import COLORS from '../colors.json';

// ----------------------------------------------------------------------

const accepted = COLORS.success.main;
const planned = COLORS.grey[500];
const rejected = COLORS.error.main;
const requested = COLORS.warning.main;

const _events = [
  {
    id: _mock.id(1),
    title: 'annual leave',// ca sáng
    allDay: true,
    color: accepted,
    description: _mock.description(1),
    start: fSub({ days: 17, hours: 13, minutes: 0 }),
    end: fSub({ days: 13, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(1),
    title: 'annual leave', // ca trưa
    allDay: true,
    color: accepted,
    description: _mock.description(1),
    start: fSub({ days: 16, hours: 13, minutes: 0 }),
    end: fSub({ days: 13, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(1),
    title: 'annual leave', // ca chiều
    allDay: true,
    color: accepted,
    backgroundColor: '#ff0000',
    description: _mock.description(1),
    start: fSub({ days: 16, hours: 13, minutes: 0 }),
    end: fSub({ days: 14, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(1),
    title: 'annual leave',// ca sáng
    allDay: true,
    color: requested,
    description: _mock.description(1),
    start: fSub({ days: 6, hours: 13, minutes: 0 }),
    end: fSub({ days: 3, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(1),
    title: 'annual leave', // ca trưa
    allDay: true,
    color: requested,
    description: _mock.description(1),
    start: fSub({ days: 5, hours: 13, minutes: 0 }),
    end: fSub({ days: 3, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(1),
    title: 'annual leave', // ca chiều
    allDay: true,
    color: requested,
    description: _mock.description(1),
    start: fSub({ days: 4, hours: 13, minutes: 0 }),
    end: fSub({ days: 3, hours: 18, minutes: 0 }),
  },
  {
    id: _mock.id(5),
    title: 'sick leave',
    allDay: true,
    color: requested,
    description: _mock.description(5),
    start: fAdd({ days: 1, hours: 0, minutes: 0 }),
    end: fAdd({ days: 1, hours: 0, minutes: 30 }),
  },
  {
    id: _mock.id(6),
    title: 'married leave',
    allDay: true,
    color: rejected,
    description: _mock.description(6),
    start: dayjs(fSub({ days: 2 }))
      .startOf('day')
      .format(),
    end: dayjs(fSub({ days: 1 }))
      .endOf('day')
      .format(),
  },
  {
    id: _mock.id(7),
    title:'annual leave',
    allDay: true,
    color: accepted,
    description: _mock.description(7),
    start: fAdd({ days: 0, hours: 0, minutes: 15 }),
    end: fAdd({ days: 0, hours: 0, minutes: 30 }),
  },
  {
    id: _mock.id(9),
    title: 'annual leave',
    allDay: true,
    color: planned,
    description: _mock.description(9),
    start: fAdd({ days: 6, hours: 0, minutes: 10 }),
    end: fAdd({ days: 6, hours: 0, minutes: 20 }),
  },
];

// ----------------------------------------------------------------------

let data = _events;

export function getData() {
  return cloneDeep(data);
}

export function saveData(newData: Record<string, any>[]) {
  const reduceItems = Object.values(
    newData.reduce((accumulator: Record<string, any>, current: any) => {
      if (!accumulator[current.id]) {
        accumulator[current.id] = current;
      } else {
        accumulator[current.id] = { ...accumulator[current.id], ...current };
      }
      return accumulator;
    }, {})
  );

  data = reduceItems;
}
