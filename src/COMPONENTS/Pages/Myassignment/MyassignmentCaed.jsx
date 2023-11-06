import { identityMatrix } from 'pdf-lib/cjs/types/matrix';
import React from 'react';

const MyassignmentCaed = ({item}) => {
  const {_id,file,description,name,email,type}=item
  return (
    <div>
hi      {type}
{_id}
    </div>
  );
};

export default MyassignmentCaed;