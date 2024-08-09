import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const _requests = [...Array(20)].map((_, index) => {
  const type = (index % 3 && 'Annual Leave') || (index % 2 && 'Sick Leave') || 'Married Leave';

  const status = (index % 2 && 'Requested') || (index % 3 && 'Canceled') || 'Accepted';
  const comment = index % 2 && 'Vô lí quá không cho nghỉ nhé' || '';
  const sessionStart = (index % 2 && 'Morning') || (index % 3 && 'Afternoon') || 'Morning';
  const sessionEnd = (index % 2 && 'Afternoon') || (index % 3 && 'Morning') || 'Morning';

  return {
    id: _mock.id(index),
    type,
    startDate: _mock.time(index),
    sessionStart,
    endDate: _mock.time(index),
    sessionEnd,
    reason: _mock.productName(index),
    duration: _mock.number.nativeS(index),
    status,
    comment,
    createdAt: _mock.time(index),
    updatedAt: _mock.time(index),
  };
});
