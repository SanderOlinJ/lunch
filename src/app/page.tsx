"use client";
import LunchTime from "@/components/LunchTime";
import NotLunchTime from "@/components/NotLunchTime";
import { ReactElement, useEffect, useState } from "react";

export default function Home(): ReactElement {
  const [isLunchTime, setIsLunchTime] = useState<boolean>(false);

  useEffect(() => {
    const checkTime = () => {
      const currentTime: Date = new Date();
      const isLunch =
        currentTime.getHours() >= 11 && currentTime.getHours() < 12;
      setIsLunchTime(isLunch);
    };

    checkTime();

    const intervalId = setInterval(checkTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isLunchTime ? <LunchTime /> : <NotLunchTime />}
    </main>
  );
}
