import { create } from "zustand";

interface DateState {
  currentDate: Date;
  todayYear: number;
  todayMonth: number;
  todayDay: number;
  setCurrentDate: (date: Date) => void;
}

export const useDateStore = create<DateState>((set) => {
  const today = new Date();

  return {
    currentDate: today,
    todayYear: today.getFullYear(),
    todayMonth: today.getMonth(),
    todayDay: today.getDate(),

    setCurrentDate: (date: Date) =>
      set({
        currentDate: date,
        todayYear: date.getFullYear(),
        todayMonth: date.getMonth(),
        todayDay: date.getDate(),
      }),
  };
});
