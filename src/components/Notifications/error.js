import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error({ value }) {
  const toastId = React.useRef(null);
  if (!toast.isActive(toastId.current)) {
    toastId.current = toast.error(
      `' ${value} ' is not a valid email address.`,
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      },
    );
  }

  return <ToastContainer />;
}
export default Error;
