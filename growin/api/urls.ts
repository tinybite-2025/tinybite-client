import ENV from "@/config/env";

export const BASE_URL = ENV.API_URL;

// todo : 임시로 추가한 api이기 때문에 실제 api 문서와 다른 점이 있어 추후 수정 필요
export const ENDPOINT = {
  TASK: {
    POST_TASKS: "/api/v1/tasks",
    PATH_TASKS: (taskId: number) => `/api/v1/tasks/${taskId}`,
    DELETE_TASKS: (taskId: number) => `/api/v1/tasks/${taskId}`,
  },
};
