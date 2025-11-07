import React, { useState } from "react";

const MonthlyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();
  const todayDay = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  // 선택한 달의 마지막 일자 계산 함수
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  // 1일의 요일 계산 함수
  const getFirstDayOfMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  // 선택한 달의 달력 UI에 보여질 날짜 계산 함수
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];
    const prevMonthDays = firstDay === 0 ? 6 : firstDay - 1; // 전달의 마지막 요일

    // 이전 달 날짜
    const prevMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    const prevMonthDaysCount = prevMonth.getDate();
    for (let i = prevMonthDays; i > 0; i--) {
      days.push({
        day: prevMonthDaysCount - i + 1,
        isCurrentMonth: false,
      });
    }

    // 현재 달 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isCurrentMonth: true,
      });
    }

    // 다음 달 날짜
    if (days.length % 7) {
      const remainingDays = 42 - days.length;
      for (let i = 1; i <= remainingDays; i++) {
        days.push({
          day: i,
          isCurrentMonth: false,
        });
      }
    }

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  };

  const weekDays = ["월", "화", "수", "목", "금", "토", "일"];

  return <></>;
};

export default MonthlyCalendar;
