import { memo } from 'react';

const Footer = () => {
  return (
    <div className="pb-4">
      <p className=" text-center text-purple">
        Copyright © 2022{' '}
        <a href="https://github.com/merano5342" className="mx-1 text-cyan">
          Merano Tu
        </a>
        rights reserved. | API from
        <a
          href="https://github.com/ruyut/TaiwanCalendar?utm_source=pocket_reader"
          className="mx-1 text-cyan"
        >
          ruyut/TaiwanCalendar
        </a>
      </p>
    </div>
  );
};

export default memo(Footer);
