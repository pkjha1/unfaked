import {FaustPage, useAuth} from "@faustwp/core";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import DashboardLayout from "@/container/DashboardLayout";
import CircleLoading from "@/components/Loading/CircleLoading";
import Label from "@/components/Label/Label";
import Input from "@/components/Input/Input";

const Page: FaustPage<{}> = () => {
    const { isReady, isAuthenticated, viewer } = useAuth()
    const router = useRouter()
    const [image, setImage] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)

    useEffect(() => {
        if (isReady && isAuthenticated === false) {
            router.push('/login').then(r => {
                console.log("Login again");
                console.log(r);
            });
            return;
        }
    }, [isAuthenticated, isReady])

    function onImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
        console.log("Image Upload started")
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        console.log(image)
        // Upload will be defined later.
    }

    const handleDeleteImage = () => {
        setImage(null);
        setPreview(null);
    };

    function renderMainContent() {
        return (
            <div className={'max-w-2xl'}>
                {isAuthenticated && viewer?.email && (
                    <div className="mt-8">
                        <div className="flow-root">
                            <div className="NcmazAccountPage-GeneralForm space-y-5 sm:space-y-6 md:sm:space-y-7">
                                <div>
                                    <h2 className="text-xl font-semibold capitalize">
                                        Deep Fake Checker
                                    </h2>
                                </div>
                                <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
                                {/* ---- */}

                                {/* ---- */}
                                <div>
                                    <Label>Upload</Label>
                                    <div className="mt-1.5 flex">
                                        <span
                                            className="inline-flex items-center rounded-s-2xl border border-e-0 border-neutral-200 bg-neutral-50 px-2.5 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                 fill="currentColor" className="size-6">
                                              <path
                                                  d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z"/>
                                            </svg>
                                        </span>
                                        <Input
                                            type={"file"}
                                            accept={"image/*"}
                                            className={"!rounded-s-none"}
                                            required
                                            onChange={onImageUpload}
                                        />
                                    </div>
                                    <div>
                                        {preview && (
                                            <div className="relative">
                                                <img src={preview} alt="Preview" className="max-w-full h-auto"/>
                                                <button
                                                    type="button"
                                                    onClick={handleDeleteImage}
                                                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                                >
                                                    &times;
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            <DashboardLayout>
                <div className="px-4 sm:px-6 lg:px-8">
                    {viewer?.email !== undefined ? renderMainContent() : <CircleLoading/>}
                </div>
            </DashboardLayout>
        </>
    );
};

export default Page;