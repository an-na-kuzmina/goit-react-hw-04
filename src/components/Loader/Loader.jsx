import { MagnifyingGlass } from 'react-loader-spinner';
import s from './Loader.module.css';
const Loader = () => {
  return (
    <div>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass={s.wrapper}
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
