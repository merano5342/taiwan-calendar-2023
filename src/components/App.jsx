import { useEffect, useState } from 'react';
import Footer from './Footer';
import Month from './Month';
import Nav from './Nav';

// const API_TW_CALENDAR = (year) => `https://cdn.jsdelivr.net/gh/ruyut/TaiwanCalendar/data/${year}.json`
const API_TW_CALENDAR = `https://cdn.jsdelivr.net/gh/ruyut/TaiwanCalendar/data/2023.json`;

const App = () => {
  const [calData, setCalData] = useState([]);
  const [apiError, setApiError] = useState(null);

  const [weekStart, setWeekStart] = useState('mon');
  const [scale, setScale] = useState('s');

  useEffect(() => {
    fetch(API_TW_CALENDAR)
      .then((res) => res.json())
      .then((data) => {
        setCalData(data);
      })
      .catch((err) => {
        setApiError(err.calData);
        console.log(apiError);
      });
  }, [apiError]);

  const monthArr = [...Array(12).keys()].map((x) =>
    (x + 1).toString().padStart(2, '0'),
  );

  const filteredMonth = (theMonth) => {
    return calData.filter((x) => x.date.match(`2023${theMonth}`));
  };

  const printDate = (date) => {
    if (date) {
      return Number(date[6] + date[7]);
    }
    return null;
  };

  return (
    <div className="wrapper flex flex-col bg-veryPaleOrange">
      <Nav
        weekStart={weekStart}
        setWeekStart={setWeekStart}
        scale={scale}
        setScale={setScale}
      />
      <div className="cal mx-auto mt-[200px] grid px-10 " data-scale={scale}>
        {monthArr.map((month) => {
          const monthData = filteredMonth(month);
          return (
            <Month
              monthData={monthData}
              month={month}
              printDate={printDate}
              weekStart={weekStart}
              scale={scale}
              key={month}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
