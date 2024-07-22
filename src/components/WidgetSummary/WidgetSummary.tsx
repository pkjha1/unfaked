import WidgetHeading1 from "@/components/WidgetHeading1/WidgetHeading1";
import GptRequestForm from "@/components/GptRequestForm";
import {useState} from "react";
import CardCategory6Skeleton from "@/components/CardCategory6/CardCategory6Skeleton";

export interface WidgetSummaryProps {
    className?: string
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const WidgetSummary = ({ className = 'rounded-3xl border border-neutral-100 dark:border-neutral-700' }: WidgetSummaryProps) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleUserInput = (userInput: string) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: 'user', content: userInput }
        ]);
        setLoading(true);
    }

    const handleNewMessage = (response: string | null) => {
        setLoading(false);
        if (response === null) return;
        setMessages((prevMessages) => [
            ...prevMessages,
            { role: 'assistant', content: response },
        ]);
    };

    return (
        <div className={`nc-WidgetCategories overflow-hidden ${className}`}>
            <WidgetHeading1
                title="Search Labs | AI Overview"
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                           stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
                </svg>
                }
            />
            <div className="p-4 xl:p-5">
				<div className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {messages.map((message, index) => (
                        <div key={index} className={`mb-2 ${message.role === 'user' ? 'text-blue-600' : 'text-green-600'}`}>
                            <strong>{message.role === 'user' ? 'User: ' : 'Assistant: '}</strong>
                            {message.content}
                        </div>
                    ))}
                    {loading && <CardCategory6Skeleton className="p-4 xl:p-5" />}
				</div>
                <div className="mt-4">
                    <GptRequestForm onNewMessage={handleNewMessage} onNewUserInput={handleUserInput} />
                </div>
            </div>
        </div>
    )
}

export default WidgetSummary;

