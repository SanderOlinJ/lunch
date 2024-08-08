"use client"
import {ReactElement, useEffect, useState} from "react";
import Confetti from "react-confetti";

export default function LunchTime (): ReactElement {
    const [ windowSize, setWindowSize ] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    function handleWindowSizeChange(): void {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }

    useEffect(() => {
        window.onresize = () => handleWindowSizeChange();
    })

    return (
        <main className="flex flex-col items-center p-24">
            <h1 className="text-5xl font-bold">DET ER LUNSJ!!!!</h1>
            <h2 className="text-5xl font-bold mt-10">🎉🎉🎉🎉🎉🎉</h2>
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
            />
        </main>
    );
}