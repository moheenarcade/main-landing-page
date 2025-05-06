
// 'use client';

// import { useEffect, useState } from 'react';

// const TOTAL_SECONDS = 12 * 60 * 60; // 12 hours

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

//   useEffect(() => {
//     const initializeEndTime = () => {
//       const newEndTime = Date.now() + TOTAL_SECONDS * 1000;
//       localStorage.setItem('countdownEndTime', newEndTime.toString());
//       return newEndTime;
//     };

//     let endTime = parseInt(localStorage.getItem('countdownEndTime') || '', 10);
//     if (!endTime || isNaN(endTime)) {
//       endTime = initializeEndTime();
//     }

//     const updateTimer = () => {
//       const now = Date.now();
//       let diff = Math.floor((endTime - now) / 1000);

//       if (diff <= 0) {
//         endTime = initializeEndTime();
//         diff = TOTAL_SECONDS;
//       }

//       setTimeLeft(diff);
//     };

//     updateTimer();

//     const interval = setInterval(updateTimer, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (value) => value.toString().padStart(2, '0');

//   const hours = formatTime(Math.floor(timeLeft / 3600));
//   const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
//   const seconds = formatTime(timeLeft % 60);

//   return (
//     <div className="text-center text-4xl font-mono font-bold text-[white] w-fit mx-auto">
//       {hours}:{minutes}:{seconds}
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

const TOTAL_SECONDS = 12 * 60 * 60; // 12 hours

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    const initializeEndTime = () => {
      const newEndTime = Date.now() + TOTAL_SECONDS * 1000;
      localStorage.setItem('countdownEndTime', newEndTime.toString());
      return newEndTime;
    };

    let endTime = parseInt(localStorage.getItem('countdownEndTime') || '', 10);
    if (!endTime || isNaN(endTime)) {
      endTime = initializeEndTime();
    }

    const updateTimer = () => {
      const now = Date.now();
      let diff = Math.floor((endTime - now) / 1000);

      if (diff <= 0) {
        endTime = initializeEndTime();
        diff = TOTAL_SECONDS;
      }

      setTimeLeft(diff);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  const hours = formatTime(Math.floor(timeLeft / 3600));
  const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
  const seconds = formatTime(timeLeft % 60);

  return (
    <div className="flex justify-center items-center gap-4 text-white">
      {/* HOURS */}
      <div className="flex flex-col items-center">
        <div className=" px-4 py-2 rounded-md text-4xl font-bold font-mono shadow-lg">
          {hours}
        </div>
        <span className="mt-2 text-sm uppercase tracking-widest">Hours</span>
      </div>

      <div className="text-5xl font-bold mb-[40px]">:</div>

      {/* MINUTES */}
      <div className="flex flex-col items-center">
        <div className=" px-4 py-2 rounded-md text-4xl font-bold font-mono shadow-lg">
          {minutes}
        </div>
        <span className="mt-2 text-sm uppercase tracking-widest">Minutes</span>
      </div>

      <div className="text-5xl font-bold mb-[40px]">:</div>

      {/* SECONDS */}
      <div className="flex flex-col items-center">
        <div className="px-4 py-2 rounded-md text-4xl font-bold font-mono shadow-lg">
          {seconds}
        </div>
        <span className="mt-2 text-sm uppercase tracking-widest">Seconds</span>
      </div>
    </div>
  );
}
