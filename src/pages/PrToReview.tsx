import React, { useState, useEffect } from 'react';
import useLocationSearch from 'hooks/useLocationSearch';
import { ReviewForm, ProfileBox, Button, Dimmed, Loading } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { createReviewByPr } from 'store/review/action';

const MAX_MESSAGE_COUNT = 100;

const PrToReview = () => {
  const dispatch = useDispatch();
  const createReviewStatus = useSelector(
    (state: StoreState) => state.review.createReviewByPr.status,
  );
  const [message, setMessage] = useState('');
  const isActive = !!message;
  const { repoId, prId } = useLocationSearch();

  const handleMessageChange = (message: string) => {
    setMessage(message);
  };

  const handleCreateReview = () => {
    dispatch(
      createReviewByPr(repoId?.toString() || '', prId?.toString() || '', {
        title: 'temp Title',
        description: message,
      }),
    );
  };

  useEffect(() => {
    if (message.length > MAX_MESSAGE_COUNT) {
      alert('메시지는 100자까지 입력 가능합니다.');
      setMessage(prev => prev.slice(0, MAX_MESSAGE_COUNT));
    }
  }, [message]);

  return (
    <div className="w-full max-w-screen-sm mx-auto px-4 py-4 my-2 bg-white rounded">
      {createReviewStatus === 'FETCHING' && (
        <Dimmed>
          <Loading />
        </Dimmed>
      )}
      <ProfileBox />
      <ReviewForm
        message={message}
        onMessageChange={handleMessageChange}
        maxMessageCount={MAX_MESSAGE_COUNT}
      />
      <Button
        className="w-full mt-2"
        onClick={handleCreateReview}
        disabled={!isActive}
      >
        리뷰 생성하기
      </Button>
    </div>
  );
};

export default PrToReview;
