import React from 'react';
import { Link } from 'react-router-dom';

const Allsubmissioncard = ({ item }) => {
  const { _id, examinee, examineeemail, type, author, totalmark, assignmentname } = item;
  console.log(author);

  return (
    <div>
      {type || type === 'pending' ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Examinee name: {examinee}</h2>
            <p>Examinee email: {examineeemail}</p>
            <p>Assignment type: {type}</p>
            <p>Assignment name: {assignmentname}</p>
            <div className="card-actions justify-end">
              <Link to={`/markass/${_id}`}>
                <button className="btn btn-primary">Give Mark</button>
              </Link>
            </div>
          </div>
        </div>
      ) : <>h</>}
    </div>
  );
};

export default Allsubmissioncard;
