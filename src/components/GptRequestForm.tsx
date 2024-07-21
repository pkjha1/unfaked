import React, {FC, useState} from 'react'
import Input from './Input/Input'
import ButtonCircle from './Button/ButtonCircle'
import {ArrowRightIcon} from '@heroicons/react/24/solid'
import OpenAI from "openai";

interface Props {
    className?: string;
    onNewUserInput: (userInput: string) => void;
    onNewMessage: (response: string | null) => void;
}

const openai = new OpenAI({
    apiKey: 'sk-proj-ZuF4TIh5Cwm1n1frISwVT3BlbkFJD8M8Bg9ESswkwzZyFCZp',
    dangerouslyAllowBrowser: true
});

const GptRequestForm: FC<Props> = ({ className = '', onNewMessage , onNewUserInput}) => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)

    const handleButtonClick = async () => {
        if (!input) return

        setLoading(true)

        onNewUserInput(input);
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: "user", content: input }],
                model: "gpt-4o-mini",
            });
            const responseText = chatCompletion.choices[0].message.content;
            onNewMessage(responseText);
            setInput('');
        } catch (err) {
            onNewMessage("Sorry, I could not find anything, please ask again.")
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                <Input
                    required
                    aria-required
                    placeholder={"Ask me anything"}
                    type={"text"}
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    disabled={loading}
                />
                <ButtonCircle
                    onClick={handleButtonClick}
                    className="absolute end-1 top-1/2 -translate-y-1/2 transform dark:bg-neutral-300 dark:text-black"
                    disabled={loading}
                >
                    <ArrowRightIcon className="h-5 w-5 rtl:rotate-180" />
                </ButtonCircle>
            </div>
        </div>
    )
}

export default GptRequestForm