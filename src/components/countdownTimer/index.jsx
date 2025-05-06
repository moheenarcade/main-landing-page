// 'use client';

// import { useEffect, useState } from 'react';

// const TOTAL_SECONDS = 12 * 60 * 60; // 12 hours

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState(TOTAL_SECONDS);

//   useEffect(() => {

//     let endTime = localStorage.getItem('countdownEndTime');

//     if (!endTime) {
//       const now = Date.now();
//       endTime = now + TOTAL_SECONDS * 1000;
//       localStorage.setItem('countdownEndTime', endTime);
//     } else {
//       endTime = parseInt(endTime, 10);
//     }

//     const updateTimer = () => {
//       const now = Date.now();
//       const diff = Math.max(Math.floor((endTime - now) / 1000), 0);
//       setTimeLeft(diff);
//     };

//     updateTimer();

//     const interval = setInterval(() => {
//       updateTimer();
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (value) => value.toString().padStart(2, '0');

//   const hours = formatTime(Math.floor(timeLeft / 3600));
//   const minutes = formatTime(Math.floor((timeLeft % 3600) / 60));
//   const seconds = formatTime(timeLeft % 60);

//   return (
//     <div className="text-center text-4xl font-mono font-bold text-[#efba1e] w-fit mx-auto">
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
    <div className="text-center text-4xl font-mono font-bold text-[#efba1e] w-fit mx-auto">
      {hours}:{minutes}:{seconds}
    </div>
  );
}
