import React, { useState } from 'react';

interface Snack {
    name: string;
    fileName: string;
}

const snackList: Snack[] = [
    { name: 'YT Proteinpudding', fileName: 'proteinpudding.png' },
    { name: 'YT Proteinshake', fileName: 'proteinshake.png' },
    { name: 'Cottage Cheese Vanilje', fileName: 'cottagecheese.png' },
    { name: 'Gresk Yoghurt', fileName: 'greskyoghurt.png' },
    { name: 'Rød Smoothie', fileName: 'rodsmoothie.png' },
    { name: 'Gul Smoothie', fileName: 'gulsmoothie.png' },
    { name: 'Go Morgen Morell', fileName: 'gomorgen_morell.png' },
    { name: 'Go Morgen Mango', fileName: 'gomorgen_mango.png' },
];

const SnackGenerator: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [randomSnack, setRandomSnack] = useState<Snack>();

    const generateRandomSnack = () => {
        const randomIndex = Math.floor(Math.random() * snackList.length);
        const snack = snackList[randomIndex];
        setRandomSnack(snack);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div style={{position: "absolute", bottom: "25px", zIndex: 30}}>
            <p className="text-center text-lg font-bold">Trenger du motivasjon, siden det ikke er lunsj?</p>
            <p className="text-center text-lg">Nyt en snack!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    onClick={generateRandomSnack}>
                Tilfeldig snack
            </button>
            {modalOpen && randomSnack && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white dark:bg-custom-dark-modal px-20 py-10 rounded-lg shadow-lg z-60"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-2.5 -left-2.5 bg-white border-2 border-purple-900 rounded-full
                            w-8 h-8 flex justify-center items-center cursor-pointer text-purple-900 text-2xl"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <p className="text-center text-lg">Gå og ta deg en</p>
                        <h2 className="text-center text-2xl font-bold mb-4">{randomSnack?.name}</h2>
                        <img className="h-36 mx-auto" src={`/${randomSnack?.fileName}`} alt={randomSnack?.name}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SnackGenerator;
