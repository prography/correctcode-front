import useEventListener from 'hooks/useEventListener';
import { MOBILE_WIDTH } from 'constants/device';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { updateDevice } from 'store/device/action';

const useDevice = () => {
  const isMobile = useSelector((state: RootState) => state.device.isMobile);
  const dispatch = useDispatch();
  useEventListener('resize', () => {
    if (!isMobile && window.innerWidth < MOBILE_WIDTH) {
      return dispatch(updateDevice({ isMobile: true }));
    }
    if (isMobile && window.innerWidth >= MOBILE_WIDTH) {
      return dispatch(updateDevice({ isMobile: false }));
    }
  });
};

export default useDevice;
