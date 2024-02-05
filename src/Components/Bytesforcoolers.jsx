import { useState } from "react"
import { FaLock } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa";


export function Bytesforcoolers() {


    const corAleatoria = () => {

        const cor = '#' + Math.floor(Math.random() * 16777215).toString(16)

        return cor
    }

    const array = ['', '', '', '', '']

    const arrayCorAleatorio = array.map((e) => corAleatoria())

    const [state, setState] = useState(arrayCorAleatorio)

    const handleclick = (array) => {

        setState(array.map((e, index) => {
            if (lock[index]) {
                return state[index]
            }
            else {
                return corAleatoria()
            }
        }))
    }

    const clickNaDiv = (i) => {
        console.log(state[i])
    }

    const arrayLock = [false, false, false, false, false]

    const [lock, setLock] = useState(arrayLock)

    const handleLockClick = (i) => {

        setLock(previousLock => (previousLock.map((e, index) => {
            if (index === i) {
                return !e;
            } else {
                return e;
            }
        })))

    }


    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert(`Text copied to clipboard: ${text}`, text);
        } catch (error) {
            alert('Error copying to clipboard:', error);
        }
    };

    return (

        <div className="bg-white font-bold pb-px-1 m-5 h-screen">
            <h1 className="text-7xl text-left h-16 pb-px-1">#Bytes4Coolers</h1>

            <div className="flex justify-center m-5 h-4/6">
                {array.map((cell, i) => (
                    <li className="list-none">
                        <div
                            key={i}
                            style={{ backgroundColor: state[i] }}
                            className="flex items-end justify-center w-60 font-bold m-1 rounded-md h-full"
                            onClick={() => clickNaDiv(i)}
                        >
                            <div
                                className="bg-orange-100 rounded-md color text-black m-4 pb-px-1 opacity-70 flex flex-col items-center justify-around w-20 h-28">
                                <h1 className="font-medium  font-sans text-lg">{state[i].toUpperCase()}</h1>
                                <button className="hover:scale-125"
                                    onClick={() => handleLockClick(i)}>{lock[i] ?
                                        <FaLock /> :
                                        <FaUnlock />
                                    }
                                </button>
                                <button className="hover:scale-125"
                                    onClick={() => copyToClipboard(state[i])}>
                                    <FaCopy />
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
            <button className='p-4 px-7 text-black text-2xl border-solid m-2 border-black border-2 rounded-md'
                onClick={() => handleclick(array)}>
                Generate Cooler Palette</button>
        </div>
    )

}