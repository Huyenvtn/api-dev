import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

export const _requests = [...Array(20)].map((_, index) => {
  const department = (index % 3 && 'Marketing') || (index % 2 && 'IT') || 'Nhân sự';

  const contract = (index % 2 && 'general') || (index % 3 && 'contructor') || 'parttime';

  const manager = (index % 2 && 'Lê Văn Tèo') || (index % 3 && 'Phạm Anh') || 'Cao Văn Bá';

  const position = (index % 2 && 'Junior') || (index % 3 && 'Senior') || 'Middle';

  const gender = (index % 2 && 'Male') || (index % 3 && 'Female') || 'Other';
  
  const maritalStatus = (index % 3 && 'Single') || (index % 2 && '1 children') || '2 children';
  
  const identifier = (index % 3 && 'ABD') || (index % 2 && 'CDG') || 'ARD';
  
  const hasLeft = (index % 3 && true) || (index % 2 && false) || false;

  return {
    id: _mock.id(index),
    fullname: _mock.fullName(index),
    avtUrl: _mock.image.avatar(index),
    gender,
    dateOfBirth: _mock.time(index),
    phoneNumber: _mock.phoneNumber(index),
    email: _mock.email(index),
    skype: _mock.skype(index),
    maritalStatus,
    identifier,//cccd
    permanentAddress: _mock.fullAddress(index),
    temporaryAddress: _mock.fullAddress(index),
    position,
    socialID: _mock.phoneNumber(index),
    department,
    contract,
    manager,
    hasLeft,
    dateHired: _mock.time(index),
  };
});
