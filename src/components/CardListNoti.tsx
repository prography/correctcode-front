import React, { useMemo } from 'react';
import { Review, UserType } from 'models/review';
import Message from './Message';
import styles from 'scss/components/Card.module.scss';

type RevieweeStatus = 'request' | 'waiting';
type ReviewerStatus = 'empty' | 'null';

const MessageConfig = {
  [UserType.REVIEWEE]: {
    request: {
      title: '코드 리뷰를 요청해보세요!',
      message: '최상의 코드 전문가들이 6시간 이내에 리뷰를 시작합니다.',
      subMessage: 'Python, Javascript 언어 답변이 가장 빠릅니다.',
      children: () => <div className={styles.requestButton}>리뷰 요청하기</div>,
    },
    waiting: {
      title: '코드 리뷰가 진행 중이에요.',
      message: '답변은 24시간 내로 완성됩니다.',
      subMessage: '한 번에 하나의 Repository만 리뷰 요청이 가능해요!',
    },
  },
  [UserType.REVIEWER]: {
    empty: {
      title: '리뷰를 기다리는 코드가 없어요.',
      message: '곧 리뷰가 등록될거에요.',
      subMessage: '심호흡 한 번 하고 조금만 기다려보아요.',
      children: () => <div className={styles.requestButton}>리뷰 요청하기</div>,
    },
    null: {
      title: '리뷰 중인 코드가 없어요.',
      message: '지금 바로 코드 리뷰를 시작해보세요.',
      subMessage: '많은 사람들이 리뷰를 기다리고있습니다.',
    },
  },
};

type Props = {
  userType: UserType;
  reviews: Review[];
  isReviewers: boolean;
};

const CartListNoti: React.FC<Props> = ({ userType, reviews, isReviewers }) => {
  const messageConfig = MessageConfig[userType] as any;
  const reviewStatus = useMemo(() => {
    const hasOngoing = reviews.some(({ status }) => status === 'ongoing');
    if (userType === UserType.REVIEWEE) {
      return !hasOngoing ? 'request' : 'waiting';
    }
    if (!isReviewers && reviews.length === 0) {
      return 'empty';
    }
    if (isReviewers && !hasOngoing) {
      return 'null';
    }
    return '';
  }, [reviews, userType, isReviewers]);

  const messageProps = messageConfig[reviewStatus];

  if (!messageProps) {
    return null;
  }
  return <Message {...messageProps} />;
};

export default CartListNoti;
