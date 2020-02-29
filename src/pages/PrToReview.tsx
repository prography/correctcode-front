import React, { useState, useEffect } from 'react';
import useLocationSearch from 'hooks/useLocationSearch';
import { ReviewForm } from 'components';

const MAX_MESSAGE_COUNT = 100;

const PrToReview = () => {
  const [message, setMessage] = useState('');
  const { repoId, prId } = useLocationSearch();

  const handleMessageChange = (message: string) => {
    setMessage(message);
  };

  useEffect(() => {
    if (message.length > MAX_MESSAGE_COUNT) {
      alert('메시지는 100자까지 입력 가능합니다.');
      setMessage(prev => prev.slice(0, MAX_MESSAGE_COUNT));
    }
  }, [message]);

  console.log(repoId, prId);

  return (
    <ReviewForm
      message={message}
      onMessageChange={handleMessageChange}
      maxMessageCount={MAX_MESSAGE_COUNT}
    />
  );
};

export default PrToReview;
