import React, {FC, useState} from 'react'
import OpenAI from "openai";
import {ChatCompletionMessageParam} from "openai/resources";
import Textarea from "@/components/Textarea/Textarea";

interface Props {
    className?: string;
    onNewUserInput: (userInput: string) => void;
    onNewMessage: (response: string | null) => void;
    blogContent: string;
}

const beautificationPrompt = "Can you please provide a beautified HTML content for the above question? Also keep in mind to not respond anything other than related to article. For eg, do not provide information that the response is an html etc. Also, the response should be a full HTML 5 but please do not add anything else outside the html tag.";

const openai = new OpenAI({
    apiKey: 'sk-proj-Iqez2t4VBIgFcQ320p3ET3BlbkFJS4gqRrBTD8yHFr65q9dt',
    dangerouslyAllowBrowser: true
});

const GptRequestForm: FC<Props> = ({ className = '', onNewMessage , onNewUserInput, blogContent}) => {
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [conversationHistory, setConversationHistory] = useState<ChatCompletionMessageParam[]>([{ role: "system", content: "You are an AI assistant expert in Journalism and World events. You are given the following blog content: " + blogContent }]);

    const handleButtonClick = async () => {
        if (!input) return

        setLoading(true)

        onNewUserInput(input);
        const prompt = input + " " + beautificationPrompt;
        const updatedConversationHistory: ChatCompletionMessageParam[] = [...conversationHistory, { role: "user", content: prompt }];
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: updatedConversationHistory,
                model: "gpt-4o-mini",
            });
            const responseText = chatCompletion.choices[0].message?.content ?? "Sorry, I could not find anything, please ask again.";
            onNewMessage(responseText);
            setInput('');
            setConversationHistory([...updatedConversationHistory, { role: "assistant", content: responseText }]);
        } catch (err) {
            onNewMessage("Sorry, I could not find anything, please ask again.")
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleButtonClick().then();
        }
    };

    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                <Textarea
                    required
                    aria-required
                    placeholder={"Ask me anything"}
                    onChange={e => setInput(e.target.value)}
                    value={input}
                    disabled={loading}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </div>
    )
}

export default GptRequestForm