"use client"
import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<string[]>(['00', '00', '00', '00']);

    useEffect(() => {
        const interval = setInterval(() => {
            const oneDayMilliseconds = 24 * 60 * 60 * 1000; // 1 ngày có 86400 giây
            const now = new Date();
            const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 23, 59, 59); // Lấy cuối tuần
            const remainingMilliseconds = endOfWeek.getTime() - now.getTime();

            if (remainingMilliseconds <= 0) {
                clearInterval(interval);
                setTimeLeft(['00', '00', '00', '00']);
                return;
            }

            const remainingDays = Math.floor(remainingMilliseconds / oneDayMilliseconds);
            const remainingHours = Math.floor((remainingMilliseconds % oneDayMilliseconds) / (60 * 60 * 1000));
            const remainingMinutes = Math.floor((remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000));
            const remainingSeconds = Math.floor((remainingMilliseconds % (60 * 1000)) / 1000);

            setTimeLeft([
                remainingDays.toString().padStart(2, '0'),
                remainingHours.toString().padStart(2, '0'),
                remainingMinutes.toString().padStart(2, '0'),
                remainingSeconds.toString().padStart(2, '0')
            ]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center font-dosis text-sm font-semibold gap-1 mt-4">
        <div className="flex items-center justify-center bg-muted-foreground/20 w-[42px] 
        h-[32px] rounded-sm">{timeLeft[0]} <p className='text-red-500 ml-1'>D</p></div>:
        <div className="flex items-center justify-center bg-muted-foreground/20 w-[42px] 
        h-[32px] rounded-sm">{timeLeft[1]} <p className='text-red-500 ml-1'>H</p></div>:
        <div className="flex items-center justify-center bg-muted-foreground/20 w-[42px] 
        h-[32px] rounded-sm">{timeLeft[2]} <p className='text-red-500 ml-1'>M</p></div>:
        <div className="flex items-center justify-center bg-muted-foreground/20 w-[42px] 
        h-[32px] rounded-sm">{timeLeft[3]} <p className='text-red-500 ml-1'>S</p></div>
      </div>
    );
};

export default Countdown;