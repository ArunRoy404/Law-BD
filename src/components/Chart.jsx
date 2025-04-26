import React, { useEffect, useRef, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';


const Chart = ({ myBookings }) => {

    const [width, setWidth] = useState(0)
    const divRef = useRef(null)

    const containerRef = useRef(null)

    useEffect(() => {
        if (divRef.current) {
            setWidth(divRef.current.offsetWidth)
        }
        containerRef.current.scrollIntoView({behavior: 'smooth'})
    }, [])

    const updateWidth = () =>{
        if(divRef.current){
            setWidth(divRef.current.offsetWidth)
        }
    }

    window.addEventListener('resize', updateWidth)




    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div ref={containerRef} className='border-[1px] border-[#14141426] rounded-2xl p-3 md:p-6 lg:p-8 mt-4'>
            <div ref={divRef}>
                <BarChart
                    width={width}
                    height={500}
                    data={myBookings}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="consultation_fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {myBookings.map((appointment, index) => (
                            <Cell key={`cell-${index}`} fill={appointment.barColor} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default Chart;