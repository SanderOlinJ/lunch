"use client";
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
            setTimeUntilLunch(`${hours}t ${minutes}m ${seconds}s`);
        };
        calculateTimeUntilLunch();
        const intervalId: NodeJS.Timeout = setInterval(calculateTimeUntilLunch, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const images: string[] = ['/skydiver1.png', '/skydiver2.png', '/skydiver3.png', '/skydiver4.png'];
        let currentIndex: number = 0;
        let lastSpawnTime: number = Date.now();
        let animationFrameId: number;

        const spawnImage = () => {
            const img = document.createElement('img');
            img.src = images[currentIndex];
            img.style.position = 'fixed';
            img.style.top = '-600px';
            img.style.width = '500px';
            img.style.height = '500px';
            img.style.left = `${Math.random() * 70}vw`;
            img.style.zIndex = '-1';
            img.style.pointerEvents = 'none';
            img.style.animation = 'fall 8s linear';

            document.body.appendChild(img);

            img.addEventListener('animationend', () => {
                img.remove();
            });

            currentIndex = (currentIndex + 1) % images.length;
        };

        const checkAndSpawnImage = () => {
            const now: number = Date.now();
            if (now - lastSpawnTime >= 5000) {
                spawnImage();
                lastSpawnTime = now;
            }
            animationFrameId = requestAnimationFrame(checkAndSpawnImage);
        };

        const handleVisibilityChange = () => {
            if (!document.hidden) {
                lastSpawnTime = Date.now();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        checkAndSpawnImage();

        return () => {
            cancelAnimationFrame(animationFrameId);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return (
        <main className="flex flex-col items-center p-24">
            <h1 className="text-5xl font-bold">Det er ikke lunsj :´(</h1>
            <h2 className="text-3xl font-medium mt-20">Men neste lunsj er om:</h2>
            <p className="text-3xl mt-5">{timeUntilLunch}</p>
        </main>
    );
}