import React from 'react';
import Completed from '../img/completed.png';
import Failed from '../img/failed.png';
import Progress from '../img/progress.svg';
import Pending from '../img/pending.svg';

export default function StatusImage({ status, size }) {
  return (
    <div >
      {status==="completed" && <img src={Completed} alt="Completed" height={size} width={size} />}
      {status==="failed" && <img src={Failed} alt="Failed" height={size} width={size} />}
      {status==="progress" && <img src={Progress} alt="Progress" height={size} width={size} />}
      {status==="pending" && <img src={Pending} alt="Pending" height={size} width={size} />}
    </div>
  )
}
