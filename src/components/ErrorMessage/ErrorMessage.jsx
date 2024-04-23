import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Whoops, something went wrong! Please try reloading this page!');

const ErrorMessage = () => {
  notify();
  return (
      <Toaster />
  );
};

export default ErrorMessage;