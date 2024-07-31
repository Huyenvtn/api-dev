import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const _employees = [...Array(20)].map((_, index) => {
  const department = (index % 3 && 'Marketing') || (index % 2 && 'IT') || 'Nhân sự';

  const contract = (index % 2 && 'general') || (index % 3 && 'contructor') || 'parttime';

  const manager = (index % 2 && 'Lê Văn Tèo') || (index % 3 && 'Phạm Anh') || 'Cao Văn Bá';

  const identifier = (index % 3 && 'ABD') || (index % 2 && 'CDG') || 'ARD';

  const position = (index % 2 && 'Junior') || (index % 3 && 'Senior') || 'Middle';

  return {
    id: _mock.id(index),
    firstname: _mock.firstName(index),
    lastname: _mock.lastName(index),
    email: _mock.email(index),
    department,
    contract,
    manager,
    identifier,
    dateHired: _mock.time(index),
    position,
  };
});
