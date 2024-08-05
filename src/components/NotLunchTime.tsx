'use client';
import {ReactElement, useEffect, useState} from "react";

export default function NotLunchTime (): ReactElement {
    const [timeUntilLunch, setTimeUntilLunch] = useState<string>("");

    useEffect(() => {
        const calculateTimeUntilLunch = (): void => {
            const currentTime: Date = new Date();
            const nextLunchTime: Date = new Date();

            nextLunchTime.setHours(11, 0, 0, 0);

            if (currentTime.getHours() >= 11) {
                nextLunchTime.setDate(nextLunchTime.getDate() + 1);
            }
            const timeDifference: number = nextLunchTime.getTime() - currentTime.getTime();
            const hours: number = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes: number = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds: number = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setTimeUntilLunch(`${hours}h ${minutes}m ${seconds}s`);
        };
        calculateTimeUntilLunch();
        const intervalId: NodeJS.Timeout = setInterval(calculateTimeUntilLunch, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const createFallingImage = (src: string, side: 'left' | 'right') => {
            const image = document.createElement('img');
            image.src = src;
            image.style.position = 'fixed';

            if (side === 'left') {
                image.style.left = `${-20 + Math.random() * 30 }vw`;
                image.style.width = '700px';
                image.style.height = '700px';
            } else {
                image.style.left = `${45 + Math.random() * 30}vw`;
                image.style.width = '500px';
                image.style.height = '500px';
            }

            image.style.top = '-600px';
            image.style.zIndex = '0';
            image.style.pointerEvents = 'none';
            image.style.animation = `fall 8s linear`;

            document.body.appendChild(image);

            image.addEventListener('animationend', () => {
                image.remove();
            });
        };

        const spawnSkydiver1 = () => {
            createFallingImage('/skydiver1.png', 'left');
            return setInterval(() => {
                createFallingImage('/skydiver1.png', 'left');
            }, 15000);
        };

        const spawnSkydiver2 = () => {
            createFallingImage('/skydiver2.png', 'right');
            return setInterval(() => {
                createFallingImage('/skydiver2.png', 'right');
            }, 15000);
        };

        const skydiver1Timeout = setTimeout(() => {
            const skydiver1Interval = spawnSkydiver1();
            return () => clearInterval(skydiver1Interval);
        }, 2000);

        const skydiver2Timeout = setTimeout(() => {
            const skydiver2Interval = spawnSkydiver2();
            return () => clearInterval(skydiver2Interval);
        }, 8000);

        return () => {
            clearTimeout(skydiver1Timeout);
            clearTimeout(skydiver2Timeout);
        };
    }, []);

    return (
        <main className="flex flex-col items-center p-24">
            <h1 className="text-5xl font-bold">It is not lunch :´(</h1>
            <h2 className="text-3xl font-medium mt-20">Time until next lunch:</h2>
            <p className="text-3xl mt-5">{timeUntilLunch}</p>
        </main>
    );
}