import React from 'react';
import classnames from 'classnames';

type Props = {
  message: string;
  onMessageChange: (
    message: string,
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  maxMessageCount?: number;
};

const ReviewForm: React.FC<Props> = ({
  message,
  maxMessageCount = 100,
  onMessageChange,
}) => {
  const isMaxMessage = message.length === maxMessageCount;
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onMessageChange(e.target.value, e);
  };

  return (
    <div className="sm:flex-1 sm:mr-2 w-full">
      <div className="font-bold border-b py-2">
        <span>리뷰어에게 보내는 메세지</span>
      </div>

      <div className="border-b mt-2 py-2">
        <textarea
          value={message}
          className="w-full h-36 outline-none border-none"
          placeholder="최대 100자까지 입력 가능합니다."
          onChange={handleMessageChange}
        />
        <div
          className={classnames('text-right', {
            'text-error': isMaxMessage,
            'text-gray-400': !isMaxMessage,
          })}
        >
          <span>{message.length}/100</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
