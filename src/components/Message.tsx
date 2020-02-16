import React from 'react';

type Props = {
  title: string;
  message: string;
  subMessage: string;
  children?: React.ReactNode;
};

const Message: React.FC<Props> = ({ title, message, subMessage, children }) => {
  return (
    <div className="relative w-auto max-w-screen-md mb-8 pt-7 pb-5 rounded-md bg-primary shadow-md ">
      <p className="text-xl font-bold text-white ml-8 mb-2 mr-8">{title}</p>
      <p className="text-white ml-8 mb-2 mr-8">
        {message}
        <br />
        {subMessage}
      </p>
      {children}
    </div>
  );
};

export default Message;
