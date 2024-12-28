"use client"
import { EmailInput } from "@/components/email-input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
export default function Home() {
    return (
        <>
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-full overflow-scroll  bg-black ">
                <Vortex
                    backgroundColor="black"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full  h-full "
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center pt-6">
                        OutsmartAI is coming...
                    </h2>
                    <p className="text-white text-sm md:text-xl max-w-xl mt-6 text-center pb-2">
                        And when it arrives, nothing will be the same.
                        You&apos;re about to witness something huge.
                        But we&apos;re not giving away the details just yet.
                        What we can tell you is this:
                    </p>
                    <div className="p-2 rounded-full">
                        <div className="flex items-center justify-center bg-gray-50 px-6 py-6 text-neutral-800 rounded-sm">

                            <div className="w-full max-w-xl space-y-2">
                                <TextGenerateEffect words="This is the future of performance marketing" />
                                <p className=" ">   And if you're not in, you're going to regret it.</p>
                                <hr className="border-neutral-300" />
                                <p className="">The clock&apos;s ticking.

                                </p>
                                <p>
                                    Early access will be limited, and trust us
                                    <strong> —you do not want to be the one who misses this.</strong>

                                </p>
                                <hr className="border-neutral-300" />
                                <p> You&apos;ve seen the hype.<br />
                                    You&apos;ve heard the whispers.<br />
                                    But when the curtain pulls back, only the smartest brands will be ahead of the curve.</p>
                                <strong>Are you one of them?</strong>
                                <hr className="border-neutral-300" />
                                <p>    Sign up.</p>
                                <strong> Before it&apos;s too late.</strong>
                                <hr className="border-neutral-300" />
                                <div>
                                    <p>This is your chance to be the first to experience something that&apos;s about to shake up the industry.</p>
                                    <hr className="border-neutral-300" />
                                </div>
                                <div className="py-2"><strong> [Sign up for exclusive early access]</strong></div>
                                <EmailInput />
                            </div>
                        </div>

                    </div>
                </Vortex>

            </div>


        </>

    );
}   
