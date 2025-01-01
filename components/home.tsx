"use client"
import { EmailInput } from "@/components/email-input";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Vortex } from "@/components/ui/vortex";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export default function Home() {
    return (
        <>
            <div className="w-full mx-auto  h-screen overflow-scroll  bg-black text-[#f0d8b9]   ">
                {/* <Vortex
                    backgroundColor="black"
                    className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full  h-full "
                > */}
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >
                        <h2 className="text-[#f0d8b9]   text-3xl md:text-6xl font-playfair text-center pt-6  ">
                            <span className="relative ">
                                OutsmartAI
                                <svg
                                    viewBox="0 0 286 73"
                                    fill="none"
                                    className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
                                >
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{
                                            duration: 1.25,
                                            ease: "easeInOut",
                                        }}
                                        d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                                        stroke="#FACC15"
                                        strokeWidth="3"
                                    />
                                </svg>
                            </span>{" "} is coming...
                        </h2>

                        <div className="p-2 ">
                            <div className=" bg-[#353535]/60 backdrop-blur-md px-6 py-6 text-[#f0d8b9]  rounded-xl">

                                <div className="w-full max-w-xl space-y-2">
                                    {/* <div className="py-2 text-lg"><strong> [Sign up for exclusive early access]</strong></div> */}
                                    <EmailInput />
                                    <p className="text-[#f0dcc3] text-sm md:text-xl max-w-xl my-6 text-left font-sourceSan  pt-4 ">
                                        And when it arrives, nothing will be the same.
                                        You&apos;re about to witness something huge.
                                        But we&apos;re not giving away the details just yet.
                                        What we can tell you is this
                                    </p>
                                    <TextGenerateEffect className=" font-playfair" words="This is the future of performance marketing" />
                                    {/* <p className=" ">   And if you&apos;re not in, you&apos;re going to regret it.</p>
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
                                </div> */}

                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AuroraBackground>
                {/* </Vortex> */}
                {/*  */}
            </div >


        </>

    );
}   
