import { memo } from 'react';

const Day = (props) => {
  const { day, printDate, makeUpDay } = props;

  return (
    <div className="day relative">
      <div
        className="day px-3 py-2 rounded"
        key={day.date}
        data-holiday={day.isHoliday}
        data-highlight={makeUpDay(day)}
      >
        <p className="text-center font-bold ">{printDate(day.date)}</p>
      </div>
      <div className="relative">
        {day.description && (
          <p className="day-description text-center text-sm absolute bg-yellow rounded p-2 mt-2 z-10">
            {day.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default memo(Day);
