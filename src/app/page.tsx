"use client";
import LunchTime from "@/components/LunchTime";
import NotLunchTime from "@/components/NotLunchTime";
import { ReactElement, useEffect, useState } from "react";

export default function Home(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLunchTime, setIsLunchTime] = useState<boolean>(false);

  useEffect(() => {
    const checkTime = () => {
      const currentTime: Date = new Date();
      const isLunch =
        currentTime.getHours() >= 11 && currentTime.getHours() < 12 &&
          currentTime.getDay() != 6 && currentTime.getDay() != 0;
      setIsLunchTime(isLunch);
      setIsLoading(false);
    };

    checkTime();

    const intervalId = setInterval(checkTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
        {!isLoading && (
            isLunchTime ? <LunchTime/> : <NotLunchTime/>
        )}
        <div>
          <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
          >
            <defs>
              <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
              />
              <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
              />
              <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>
            </g>
          </svg>
          <div className="box-under-waves"></div>
        </div>
      </main>
  );
}
