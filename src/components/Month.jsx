import Day from './Day';

const Month = (props) => {
  const { monthData, month, printDate, weekStart, scale } = props;

  // const weekArr = [{ 一：false }, '二', '三', '四', '五', '六', '日'];
  const weekArrMon = [
    { name: 'mon', week: '一', weekend: false },
    { name: 'tue', week: '二', weekend: false },
    { name: 'wed', week: '三', weekend: false },
    { name: 'thur', week: '四', weekend: false },
    { name: 'fri', week: '五', weekend: false },
    { name: 'sat', week: '六', weekend: true },
    { name: 'sun', week: '日', weekend: true },
  ];
  const weekArrSun = [
    { name: 'sun', week: '日', weekend: true },
    { name: 'mon', week: '一', weekend: false },
    { name: 'tue', week: '二', weekend: false },
    { name: 'wed', week: '三', weekend: false },
    { name: 'thur', week: '四', weekend: false },
    { name: 'fri', week: '五', weekend: false },
    { name: 'sat', week: '六', weekend: true },
  ];

  const theFirstMon = monthData.findIndex((day) => day.week === '一');
  const getBlankDates = (week) => {
    return week === 'mon' ? (7 - theFirstMon) % 7 : (8 - theFirstMon) % 7;
  };
  const newMonthData = Array(getBlankDates(weekStart))
    .fill({})
    .concat(monthData);

  const makeUpDay = (day) => {
    if (day.description === '補行上班') {
      return 'work';
    }
    if (day.description === '調整放假' || day.description === '補假') {
      return 'holiday';
    }
  };

  // const longWeekend = (month) => {
  //   month.map((day, i) => {
  //     return day === true;
  //   });
  // };

  return (
    <div className="month-box mb-20" data-scale={scale} key={month}>
      <p className="text-5xl border-b-4 mb-5 pb-4">{Number(month)}月</p>

      <div className="month flex" data-scale={scale}>
        <div className="grid grid-cols-7 gap-3">
          {(weekStart === 'mon' ? weekArrMon : weekArrSun).map((week) => {
            return (
              <div
                className="week text-lg text-center text-darkPurple rounded-2xl py-2 data-[weekend=true]:text-softRed"
                data-weekend={week.weekend}
              >
                {week.week}
              </div>
            );
          })}
          {/* {newMonthData.map((day) => {
            
          })} */}
          {newMonthData.map((day, i) => {
            return (
              <Day
                day={day}
                key={i}
                printDate={printDate}
                makeUpDay={makeUpDay}
                scale={scale}
              />
            );
          })}
        </div>

        <div className="month-description ml-16 mt-12" data-scale={scale}>
          {monthData.map((day) => {
            if (day.description)
              return (
                <div
                  className="grid grid-cols-[80px_1fr] text-lg data-[highlight=work]:text-cyan  data-[highlight=holiday]:text-softRed"
                  data-highlight={makeUpDay(day)}
                >
                  <p className="mb-1">
                    {`${Number(month)}/${printDate(day.date)}`}
                  </p>
                  <p className="">{day.description}</p>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Month;
