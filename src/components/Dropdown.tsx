import React, { useState } from 'react';
import classnames from 'classnames';

import styles from 'scss/components/Dropdown.module.scss';

type DropdownItem = {
  value: string;
  text: string;
};
type Props = {
  items: DropdownItem[];
  selected: string | null | undefined;
  loading?: boolean;
  placeholder?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown: React.FC<Props> = ({
  items,
  selected,
  placeholder = '선택해주세요.',
  loading = false,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const handleTriggerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(prev => !prev);
  };
  const selectedItem = items.find(({ value }) => value === selected);
  return (
    <div {...props} className={classnames(props.className, styles.container)}>
      <a href="#" className={styles.trigger} onClick={handleTriggerClick}>
        <span
          className={classnames(styles.text, {
            [styles.placeholder]: !selectedItem,
          })}
        >
          {selectedItem || placeholder}
        </span>
        <i className={classnames('fas fa-chevron-down', styles.icon)}></i>
      </a>
      <ul
        className={classnames(styles.list, {
          [styles.isActive]: open,
        })}
      >
        {loading && <li className={styles.listItem}>불러오는중...</li>}
        {items.map(({ value, text }) => (
          <li key={value} className={styles.listItem}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
