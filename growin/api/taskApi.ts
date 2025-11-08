import { newTask } from "@/types/task";
import getErrorMessage from "@/util/getErrorMessage";
import { publicAxios } from "./axios";
import { ENDPOINT } from "./urls";

/**
 * 설명
 * 이렇게 추가한 api는 tanstack의 mutation이나 useQuery 등을 통헤 호출하여 사용합니다.
 */

// todo : 임시로 추가한 api이기 때문에 실제 api 문서와 다른 점이 있어 추후 수정 필요
export const postTasks = async (task: newTask) => {
  try {
    const response = await publicAxios.post(ENDPOINT.TASK.POST_TASKS, task);
    return response.data.data; // todo : 추후 응답 구조 확인 필요
  } catch (error: any) {
    const code = error.response.data.code; // todo : 추후 응답 구조 확인 필요
    const errorMessage = getErrorMessage(code);
    console.error(error);
    throw new Error(errorMessage);
  }
};
