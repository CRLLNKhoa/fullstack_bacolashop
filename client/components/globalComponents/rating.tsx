import React from 'react';
import { FaStar } from "react-icons/fa";

function RenderRating({rating}:{rating:number}) {
    const stars = [];
    // Tạo các sao dựa trên điểm số
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} className='text-yellow-400 w-3 h-3' />);
        } else {
            stars.push(<FaStar key={i} className='w-3 h-3 text-muted-foreground' />);
        }
    }

    return (
        <div className="flex items-center" title={String(rating)}>
            {stars}
        </div>
    );
}

export default RenderRating;
