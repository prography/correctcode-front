import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Toast.module.scss';
import { Toast, ToastType } from 'models/toast';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToast } from 'store/toast/action';
import {
  FaBell,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
} from 'react-icons/fa';

enum ToastStatus {
  Init = 'init',
  Show = 'show',
  Close = 'close',
}
const Icon = {
  [ToastType.Default]: <FaBell />,
  [ToastType.Success]: <FaCheckCircle />,
  [ToastType.Warning]: <FaExclamationTriangle />,
  [ToastType.Error]: <FaExclamationCircle />,
};
type ToastProps = Toast;

const ToastItem: React.FC<ToastProps> = ({ id, type, message, timeout }) => {
  const [status, setStatus] = useState(ToastStatus.Init);
  const dispatch = useDispatch();
  const timeoutId = useRef<number>();
  const closeToast = () => setStatus(ToastStatus.Close);
  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setStatus(ToastStatus.Show);
        timeoutId.current = window.setTimeout(closeToast, timeout);
      });
    });

    return () => {
      timeoutId.current ?? window.clearTimeout(timeoutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteToastItem = () => dispatch(deleteToast(id));
  const handleTransitionEnd = () =>
    status === ToastStatus.Close && deleteToastItem();
  return (
    <div
      className={classnames(styles.toast, `${type}-container`, {
        [styles.toastShow]: status === ToastStatus.Show,
        [styles.toastClose]: status === ToastStatus.Close,
      })}
      onTransitionEnd={handleTransitionEnd}
      onClick={closeToast}
    >
      <div className={styles.icon}>{Icon[type]}</div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

const ToastContainer = () => {
  const toasts = useSelector((state: StoreState) => state.toast.toasts);
  return (
    <div className={styles.container}>
      {toasts.map(toast => (
        <ToastItem key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
