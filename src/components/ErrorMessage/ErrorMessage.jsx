import { RiEmotionSadLine } from 'react-icons/ri';
import s from './ErrorMessage.module.css';
const ErrorMessage = () => {
  return (
    <div className={s.errorWrapper}>
      <p className={s.errorText}>
        Something went wrong...Please try again later
      </p>
      <RiEmotionSadLine className={s.icon} />
    </div>
  );
};

export default ErrorMessage;
