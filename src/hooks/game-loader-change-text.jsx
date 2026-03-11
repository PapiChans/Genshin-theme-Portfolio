import { useState } from "react";
import { loadingMessages } from "../utils/loading-messages";

export function useLoadingText() {

    const randomNumber = Math.floor(Math.random() * loadingMessages.length);

    const [index, setIndex] = useState(randomNumber);

    const changeLoadingText = () => {
        const randomIndex = Math.floor(Math.random() * loadingMessages.length);
        setIndex(randomIndex);
    };

    return {
        title: loadingMessages[index].title,
        text: loadingMessages[index].text,
        changeLoadingText,
    }
}