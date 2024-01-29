import { useEffect, useState } from 'react';

export default function Clock() {
  const [clock, setClock] = useState<Date>();
  const [timeSide, setTimeSide] = useState<'Morning' | 'Afternoon'>('Morning');
  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, [clock]);

  useEffect(() => {
    const hourIn24Format: number = parseInt(
      clock?.toLocaleString([], { hour: 'numeric', hour12: false }) ?? '',
    );
    setTimeSide(hourIn24Format < 12 ? 'Morning' : 'Afternoon');
  }, [clock]);

  return (
    <div className="flex w-full flex-col items-center hover:my-2">
      <p>Good {timeSide}</p>
      <p> {clock?.toLocaleTimeString() ?? 'Loading time...'}</p>
    </div>
  );
}
