import React, { useState, useRef, memo } from 'react';
import classnames from 'classnames';

import styles from 'scss/components/Dropdown.module.scss';
import useOnClickOutside from 'hooks/useClickOutside';

type DropdownItem = {
  value: string;
  text: string;
};
type Props = {
  className?: string;
  items: DropdownItem[];
  selected: string | null | undefined;
  onSelect: (value: string) => void;
  loading?: boolean;
  placeholder?: string;
};

const Dropdown: React.FC<Props> = ({
  items,
  selected,
  placeholder = '선택해주세요.',
  loading = false,
  onSelect,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(containerRef.current, () => {
    setOpen(false);
  });
  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(prev => !prev);
  };
  const handleItemClick = (value: string) => () => {
    onSelect(value);
    setOpen(false);
  };
  return (
    <div
      {...props}
      className={classnames(props.className, styles.container)}
      ref={containerRef}
    >
      <button className={styles.trigger} onClick={handleTriggerClick}>
        <span
          className={classnames(styles.text, {
            [styles.placeholder]: !selected,
          })}
        >
          {selected || placeholder}
        </span>
        <i className={classnames('fas fa-chevron-down', styles.icon)}></i>
      </button>
      <ul
        className={classnames(styles.list, {
          [styles.isActive]: open,
        })}
      >
        {loading && <li className={styles.listItem}>불러오는중...</li>}
        {items.map(({ value, text }) => (
          <li
            key={value}
            className={styles.listItem}
            onClick={handleItemClick(value)}
          >
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Dropdown);
