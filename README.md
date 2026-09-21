<div align="center">
  <img src="./TinyBite/assets/images/icon.png" alt="한입만 로고" width="150" />

  # 한입만 (TinyBite)

  **동네 이웃과 필요한 만큼 나누어 사는 공동구매 플랫폼**

  식재료, 배달음식, 생활용품을 함께 주문하고 가까운 수령 장소에서 1/N로 나눌 수 있는 React Native 앱입니다.
</div>

## 프로젝트 소개

혼자 구매하기에는 양이 많거나 배달비가 부담스러운 상품을 이웃과 나눌 수 있도록 만든 서비스입니다. 파티장이 상품과 수령 장소를 등록하면 주변 사용자가 참여를 요청하고, 실시간 채팅으로 거래를 조율합니다.

| 항목 | 내용 |
| --- | --- |
| 개발 기간 | 2025.11 ~ 2025.12 |
| 소속 | It's Time 8기 |
| 팀 구성 | 기획 1명, 디자인 1명, 프론트엔드 2명, 백엔드 3명 |
| 배포 | Google Play Console 내부 테스트 |

## 주요 기능

### 인증과 온보딩

- Google 소셜 로그인과 신규/기존 사용자 분기
- 휴대폰 인증, 닉네임 중복 확인, 약관 동의
- GPS 또는 Kakao Local API 검색을 통한 동네 설정
- `SecureStore` 기반 토큰 보관과 만료 시 자동 갱신

### 공동구매 파티

- 식재료, 배달음식, 생활용품 카테고리별 파티 탐색과 검색
- 상품 사진, 금액, 모집 인원, 상품 링크, 수령 장소를 포함한 파티 생성/수정
- 파티 참여 요청, 참여자 관리, 거래 완료 상태 처리
- 사용자 위치를 기준으로 한 파티 거리 표시

### 실시간 채팅

- WebSocket/STOMP 기반 1:1 및 그룹 채팅
- 텍스트/이미지 메시지, 이전 메시지 페이지네이션
- 참여 요청 수락, 거절과 파티 진행 상태를 채팅 안에서 처리
- 연결 상태 관리, 자동 재연결과 하트비트

## 기술적 해결

### 중복 토큰 갱신 요청 제어

인증이 필요한 API는 요청 시 `SecureStore`의 access token을 주입합니다. 여러 요청이 동시에 401/403 응답을 받으면 최초 요청만 refresh API를 호출하고, 나머지는 큐에서 대기한 뒤 갱신된 토큰으로 재시도합니다. refresh token까지 만료되면 인증 정보를 비우고 로그인 화면으로 이동합니다.

### React Native 환경의 STOMP 연결 안정화

채팅 연결을 하나의 WebSocket 클라이언트로 관리하고 채팅방 단위 구독과 해제를 분리했습니다. 10초 간격의 송수신 하트비트로 유휴 연결 종료를 방지하고, Android에서 발생한 프레임 손상과 NULL 문자 누락 문제에 대응하도록 `forceBinaryWSFrames`와 `appendMissingNULLonIncoming`을 적용했습니다.

### 파티 수정 요청과 화면 흐름 정리

새로 추가된 이미지만 먼저 업로드하고 기존 이미지 URL과 순서를 합쳐 수정 요청을 만듭니다. 제목, 금액, 인원, 링크, 수령 장소는 실제로 바뀐 필드만 PATCH body에 포함합니다. 수정 완료 후에는 `dismissTo`로 상세 화면까지 스택을 정리해 뒤로가기를 두 번 눌러야 했던 문제를 해결했습니다.

### 모바일 입력 UX 개선

파티 생성/수정 화면에 `react-native-keyboard-controller`의 `KeyboardAwareScrollView`를 적용해 키보드가 입력 영역을 가리는 문제를 완화했습니다. 공통 색상과 타이포그래피 토큰을 분리해 화면 간 시각 기준도 일관되게 유지했습니다.

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| App | React Native 0.81, Expo 54, Expo Router 6, TypeScript |
| Server State | TanStack Query 5, Axios |
| Client State | Zustand 5 |
| Realtime | WebSocket, STOMP |
| Device | Expo Location, Camera, Image Picker, Notifications, Secure Store |
| Auth/Map | Google Sign-In, Kakao Local API |
| Build | EAS Build, Google Play Console |

## 프로젝트 구조

```text
tinybite-client/
├── README.md
└── TinyBite/
    ├── app/                 # Expo Router 화면과 라우트
    ├── api/                 # Axios 인스턴스와 도메인별 API
    ├── components/          # 공통 및 기능별 UI 컴포넌트
    ├── hooks/               # Query/Mutation, 인증, 채팅 훅
    ├── lib/                 # WebSocket 클라이언트, Toast 설정
    ├── stores/              # Zustand 상태 저장소
    ├── styles/              # 색상과 타이포그래피 토큰
    ├── types/               # 도메인 타입
    └── utils/               # 포맷팅과 검증 유틸리티
```

## 실행 방법

### 1. 요구 사항

- Node.js 20 이상
- npm
- Android Studio/Android Emulator 또는 실제 Android 기기
- 네이티브 모듈을 포함하므로 Expo Development Build 사용 권장

### 2. 설치

```bash
git clone https://github.com/tinybite-2025/tinybite-client.git
cd tinybite-client/TinyBite
npm install
```

### 3. 환경 변수

`TinyBite/.env` 파일을 만들고 아래 값을 설정합니다. 실제 키와 서버 주소는 프로젝트 관리자에게 요청해 주세요.

```dotenv
EXPO_PUBLIC_BASE_URL=
EXPO_PUBLIC_WS_URL=
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=
EXPO_PUBLIC_GOOGLE_IOS_URL_SCHEME=
EXPO_PUBLIC_KAKAO_REST_API_KEY=
```

### 4. 실행

```bash
# 개발 서버
npm run start

# Android 네이티브 빌드
npm run android

# 정적 검사
npm run lint
```

## 향후 개선

- 파티 생성/수정의 대표 이미지 로직 단순화
- 상세 화면 진입 시 위치 조회에 따른 로딩 지연 개선
- 메인 파티 목록 페이지네이션
- iOS Apple 로그인과 빌드 환경 구축
- 알림 설정, 백그라운드 리마인드, 딥링크 지원

## Frontend Lead

[DandelionQZ](https://github.com/DandelionQZ) — 인증/온보딩, 파티 생성과 수정, 실시간 채팅, 공통 디자인 토큰, Android 빌드 및 내부 테스트 배포를 담당했습니다.
