import React, { useState } from 'react';

interface Snack {
    name: string;
    fileName: string;
}

const snackList: Snack[] = [
    { name: 'YT proteinpudding', fileName: 'proteinpudding.png' },
    { name: 'YT proteinshake', fileName: 'proteinshake.png' },
    { name: 'Cottage cheese vanilje', fileName: 'cottagecheese.png' },
    { name: 'Gresk yoghurt', fileName: 'greskyoghurt.png' },
    { name: 'Rød smoothie', fileName: 'rodsmoothie.png' },
    { name: 'Gul smoothie', fileName: 'gulsmoothie.png' },
    { name: 'Go morgen morell', fileName: 'gomorgen_morell.png' },
    { name: 'Go morgen mango', fileName: 'gomorgen_mango.png' },
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
            <p className="text-center text-xl font-bold">Trenger du motivasjon, siden det ikke er lunsj?</p>
            <p className="text-center text-lg">Nyt en snack!</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={generateRandomSnack}>Tilfeldig snack</button>
            {modalOpen && randomSnack && (
                <div
                    style={{
                        width: "100vw",
                        height: "100vh",
                        position: "fixed", 
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 50
                    }}
                    onClick={closeModal}
                >
                    <div
                        className="p-4 rounded shadow-lg"
                        style={{
                            backgroundColor: 'rgb(66, 16, 66)',
                            borderRadius: '10px',
                            zIndex: 60
                        }}
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <p className="text-center text-lg">Gå og ta deg en</p>
                        <h2 className="text-center text-2xl font-bold mb-4">{randomSnack?.name}</h2>
                        <img src={`/${randomSnack?.fileName}`} alt={randomSnack?.name} style={{ height: '150px', margin: "auto" }} />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={closeModal}>Lukk</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SnackGenerator;
