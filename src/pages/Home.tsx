import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classnames from 'classnames';
import { ReactComponent as Logo } from 'assets/img/homepage/logo.svg';
import { ReactComponent as Wave } from 'assets/img/homepage/bg1.svg';
import { ReactComponent as Wave2 } from 'assets/img/homepage/bg2.svg';
import { ReactComponent as Wave3 } from 'assets/img/homepage/bg3.svg';
import { ReactComponent as Arrow } from 'assets/img/homepage/arrow.svg';
import { ReactComponent as GuideAi } from 'assets/img/homepage/guideai.svg';
// import { ReactComponent as Pen } from 'assets/img/homepage/pen1.svg';
// import { ReactComponent as Pen2 } from 'assets/img/homepage/pen2.svg';
import { ReactComponent as Man } from 'assets/img/homepage/man.svg';
import { ReactComponent as RightArrow } from 'assets/img/homepage/right-arrow.svg';
import ReviewScreen from 'assets/img/homepage/mainai.png';
import githubLogo from 'assets/img/GitHubMark.png';

const ScreenHeight: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className: classNameProps,
  ...props
}) => {
  const className = classnames('h-screen relative', classNameProps);
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

type TextProps = {
  text: string;
};

const renderLineBreak = (text: string) =>
  text.split('\n').map((item, i) => {
    return (
      <React.Fragment key={i}>
        {i !== 0 && <br />}
        {item}
      </React.Fragment>
    );
  });

const HeaderText: React.FC<TextProps> = ({ text }) => (
  <div className="text-3xl lg:text-6xl font-bold">{renderLineBreak(text)}</div>
);
const SubHeaderText: React.FC<TextProps> = ({ text }) => (
  <div className="mt-5 text-2xl">{renderLineBreak(text)}</div>
);

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );

  if (isLoggedIn) {
    return <Redirect to="/reviewee" />;
  }

  return (
    <>
      <ScreenHeight className="bg-background">
        <div className="max-w-screen-xl px-6 h-20 overflow-hidden flex items-center mx-auto px-10 z-20">
          <div className="flex-1">
            <Logo className="w-32 lg:w-48" />
          </div>
          <div>
            <button className="bg-white hover:bg-gray-400 font-bold py-2 px-4 rounded-full flex items-center text-sm">
              <img
                src={githubLogo}
                alt="github"
                className="w-4 inline-block mr-2"
              />
              로그인
            </button>
          </div>
        </div>
        <div className="flex mt-32 px-6 max-w-screen-xl mx-auto flex-wrap z-20">
          <div className="flex-1 flex justify-center text-white">
            <div>
              <div className="block w-1/2 lg:hidden">
                <img src={ReviewScreen} alt="review screen" />
              </div>
              <HeaderText
                text={`당신의 코드는\n얼마나 건강한가요?`}
              ></HeaderText>
              <SubHeaderText
                text={`최고의 리뷰어들이 함께하는 코드리뷰 서비스로\n당신의 코드를진단하세요.`}
              ></SubHeaderText>
              <div className="mt-10 flex justify-center">
                <Arrow className="w-32 mr-20 z-20" />
              </div>
            </div>
          </div>
          <div className="hidden lg:block lg:flex-1 z-20 w-1/2">
            <img src={ReviewScreen} alt="review screen" />
          </div>
        </div>

        <Wave className="absolute bottom-0 w-full z-10" />
      </ScreenHeight>
      <ScreenHeight className="bg-white flex items-center lg:block">
        <div className="max-w-screen-xl px-6 mx-auto relative z-20 w-full">
          <GuideAi className="w-3/4 lg:ml-20" />
          <div className="relative lg:absolute top-0 right-0 text-background">
            <HeaderText text="User Guide" />
            <SubHeaderText
              text={`Correct.code의 코드리뷰 \n 사용법을 자세히 알아보세요!`}
            />
            <div className="mt-20">
              <button className="rounded-full p-4 bg-background w-20 h-20">
                <RightArrow style={{ fill: 'white' }} />
              </button>
            </div>
          </div>
        </div>
      </ScreenHeight>
      <ScreenHeight className="bg-white flex items-center lg:block">
        <div className="max-w-screen-lg mx-auto px-6 relative z-20 text-pastelBlue">
          <div className="flex justify-center relative items-center">
            <HeaderText text="Mission" />
          </div>
          <div className="flex justify-center relative">
            <SubHeaderText text="간단한 미션으로 코드리뷰를 경험해 보세요!" />
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 h-32 lg:h-80 lg:gap-10">
            {[...new Array(3)].map((_, i) => (
              <div className="shadow-md bg-white rounded-b-2lg rounded-tl-2lg" />
            ))}
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 h-32 lg:h-80 lg:gap-10">
            {[...new Array(3)].map((_, i) => (
              <div className="shadow-md bg-white rounded-b-2lg rounded-tl-2lg" />
            ))}
          </div>
        </div>
        <Wave2 className="absolute z-10 bottom-0" />
      </ScreenHeight>
      <ScreenHeight className="bg-white">
        <div className="flex pt-32 px-6 max-w-screen-xl mx-auto flex-wrap items-center">
          <div className="flex-1 flex justify-center text-white z-10">
            <div className="text-gray-700">
              <HeaderText text="Reviewer" />
              <SubHeaderText
                text={`당신의 코드를 진단해주는\ncorrect.code의 리뷰어들을 소개합니다.`}
              />
            </div>
          </div>
          <div className="flex-1 z-10 w-1/2">
            <Man />
          </div>
        </div>
        <div className="overflow-hidden z-20 whitespace-no-wrap">
          <div
            style={{ width: 2000, animation: 'slideshow 90s linear infinite' }}
          >
            {[...new Array(20)].map((_, i) => (
              <div
                key={i}
                className="rounded-full inline-block shadow-md ml-10"
                style={{ width: 160, height: 160 }}
              />
            ))}
          </div>
        </div>
        <Wave3 className="absolute bottom-0" />
      </ScreenHeight>
      <div className="bg-white">
        <div className="h-full bg-background pt-20 px-6 rounded-t-xl lg:rounded-t-2xl">
          <div className="text-center text-white">
            <HeaderText text="Review" />
            <SubHeaderText
              text={`correct.code 에서 코드리뷰를 이용한\n리뷰이의 후기들을 지금 만나보세요!`}
            />
          </div>
          <div
            className="mt-10 z-20 max-w-screen-sm mx-auto"
            style={{ columnCount: 2, columnGap: '1rem' }}
          >
            {[...new Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-full rounded-md shadow-md mt-2 bg-white inline-block"
                style={{ height: i % 3 === 0 ? 120 : 240 }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
