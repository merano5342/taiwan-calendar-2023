// import ListIcon from '../assets/images/view-list.svg';
// import GridIcon from '../assets/images/view-grid.svg';

const ListIcon = ({ fill }) => {
  return (
    <svg
      className="h-6 w-6"
      fill={fill}
      stroke={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 10h16M4 14h16M4 18h16"
      />
    </svg>
  );
};
const GridIcon = ({ fill }) => {
  return (
    <svg
      className="h-3 w-3"
      fill={fill}
      stroke={fill}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin=""
        strokeWidth="2"
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );
};

const Nav = (props) => {
  const { weekStart, setWeekStart, scale, setScale } = props;

  return (
    <div className="nav fixed z-20 flex h-[140px] w-full items-center justify-between bg-cyan px-8">
      <div className="nav-title text-white">
        <h1 className="text-5xl ">2023</h1>
        <h2 className="text-2xl"> 台灣放假日曆</h2>
      </div>
      <div className="statistic text-white">
        <p className="">今年共有</p>
        <p>10 個 連續假期</p>
      </div>
      <div className="flex">
        <div className="nav-select-week mx-3">
          <p className="mb-2 text-white">View Mode:</p>
          <div className="toggle-box">
            <button
              className="toggle flex items-center justify-center"
              data-active={scale === 's'}
              onClick={() => setScale('s')}
            >
              <ListIcon fill={scale === 's' ? '#FFFEF0' : '#ED6A5A'} />
              {/* <img src={ListIcon} alt="" className="h-7" /> */}
            </button>
            <button
              className="toggle flex items-center justify-center"
              data-active={scale === 'm'}
              onClick={() => setScale('m')}
            >
              <GridIcon fill={scale === 'm' ? '#FFFEF0' : '#ED6A5A'} />

              {/* <img src={GridIcon} alt="" className="h-7" /> */}
            </button>
          </div>
        </div>

        <div className="nav-select-week mx-3">
          <p className="mb-2 text-white">Week start from:</p>
          <div className="toggle-box">
            <button
              className="toggle"
              data-active={weekStart === 'mon'}
              onClick={() => setWeekStart('mon')}
            >
              Mon
            </button>

            <button
              className="toggle"
              data-active={weekStart === 'sun'}
              onClick={() => setWeekStart('sun')}
            >
              Sun
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
