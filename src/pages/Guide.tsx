import React from 'react';

import { ReactComponent as Logo } from 'assets/img/homepage/logo.svg';
import { ReactComponent as Folder } from 'assets/img/guidepage/folder.svg';
import { ReactComponent as Diff } from 'assets/img/guidepage/diff.svg';
import { ReactComponent as Light } from 'assets/img/guidepage/light.svg';
import { ReactComponent as GuideTitle } from 'assets/img/guidepage/guideTitle.svg';
import capture1 from 'assets/img/guidepage/capture1.png';
import capture2 from 'assets/img/guidepage/capture2.png';
import capture3 from 'assets/img/guidepage/capture3.png';
const Guide = () => {
  return (
    <div>
      <div
        className="h-20 overflow-hidden flex items-center mx-auto px-10 z-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31, 0, 94, 0.87) 10%, rgba(51, 0, 192, 0.8) 50%, rgba(97, 0, 225, 0.74) 88%)`,
        }}
      >
        <div className="px-10 flex-1 max-w-screen-xl mx-auto">
          <Logo className="w-32 lg:w-32" />
        </div>
      </div>
      <div className="px-16 mt-28 max-w-screen-xl mx-auto">
        <div className="flex">
          <GuideTitle className="h-8 mt-8" />
          <Light className="w-7 float-left" />
        </div>
        <div className="ml-32 mr-40">
          <div>
            <p className="text-2xl mt-28">1. 레포 등록하기</p>
            <div className="pl-16 mt-10">
              <p className="text-description">
                로그인 후 대시보드에서{' '}
                <b className="text-primary">'Repo 등록하기'</b>를 눌러 서비스를
                적용할 Repository를 적용해주세요
              </p>
              <div className="h-48 mt-8 mr-24 bg-lightergray rounded-t-2lg rounded-l-2lg shadow-lg flex items-center justify-center">
                <img src={capture1} alt="capture1" className=" h-40" />
              </div>
              <p className="text-description mt-12">
                <b className="text-primary">Correct code</b>를 이용하기 위해
                서비스를 이용할 Repository에{' '}
                <b className="text-primary">Correct code 앱</b>을 설치하는
                과정입니다.
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-16">2. Pull Request 생성하기</p>
            <div className="pl-16 mt-10">
              <div className="flex mt-10">
                <Folder className="h-48" />
                <Diff className="h-48" />
              </div>
              <p className="text-description mt-12">
                코드 리뷰는 각 파일 단위가 아닌{' '}
                <b className="text-primary">GIthub의 Pull Request 단위</b>로
                이루어집니다.<br></br> 코드에 변화를 줄때마다 쉽게 리뷰를
                받아보세요! Pull Request 에 대해 궁금하시다면,{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pastelBlue font-bold no-underline"
                >
                  [여기]
                </a>{' '}
                를 클릭해주세요.
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-20">3. 리뷰 요청하기</p>
            <div className="pl-16 mt-10">
              <div className="h-48 mt-10 mr-24 bg-lightergray rounded-t-2lg rounded-l-2lg shadow-lg flex items-center justify-center">
                <img src={capture2} alt="capture2" className=" h-40" />
              </div>
              <p className="text-description mt-12">
                Github 에서 Pull Request를 생성해주시면 위와 같은 링크가
                생성됩니다. 링크를 통해{' '}
                <b className="text-primary">리뷰 요청을 완료</b>해주세요!
              </p>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-20">4. 리뷰 진행 상황 확인</p>
            <div className="pl-16 mt-10">
              <div className="h-48 mr-24 bg-lightergray rounded-t-2lg rounded-l-2lg shadow-lg flex items-center justify-center">
                <img src={capture3} alt="capture3" className=" h-48" />
              </div>
              <p className="text-description mt-12 pb-24">
                실시간으로 리뷰 진행 상황을 확인하실 수 있습니다. Correct Code
                는 6시간 이내로 리뷰어를 매치해드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Guide;
