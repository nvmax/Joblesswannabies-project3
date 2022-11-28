import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { Link, useParams } from 'react-router-dom';

function Success() {
 
  return (
    <div className='success-page font-Poppins'>
      <div>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </div>
    </div>
  );
}

export default Success;

