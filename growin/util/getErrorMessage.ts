/**
 * API 응답 코드에 따른 에러 메시지를 반환하는 함수
 */
const getErrorMessage = (code: string): string => {
  switch (code) {
    // user
    case "WITHDRAWAL_FAILED":
      return "회원 탈퇴 처리 중 오류가 발생했습니다.";

    // default
    default:
      return "서비스 이용에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};

export default getErrorMessage;
