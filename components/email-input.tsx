'use client'
import {
    animate,
    useMotionTemplate,
    useMotionValue,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { createUser } from "./functions";
import toast from "react-hot-toast";
const EmailInput = () => {
    return (
        <div
            className=""
        >
            <BeamInput />
        </div>
    );
};
const BeamInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputEmail, setInputEmail] = useState('')
    const turn = useMotionValue(0);

    useEffect(() => {
        animate(turn, 1, {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
        });
    }, [turn]);

    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #a78bfa00 75%, #a78bfa 100%)`;

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                createUser(inputEmail).then(() => {
                    setInputEmail("")
                    toast.success(`Email added successfully!`);
                }
                ).catch(() => {

                    toast.error(`This email is already registered`);
                }
                )
                    ;
            }}
            onClick={() => {
                inputRef.current?.focus()
                    ;
            }}
            className="relative flex w-full  items-center gap-2 rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/5 py-1.5 pl-6 pr-1.5"
        >
            <input
                required
                ref={inputRef}
                value={inputEmail}
                type="email"
                onChange={(e) => {
                    setInputEmail(e.currentTarget.value)

                    console.log("email", inputEmail)
                }}
                placeholder="Enter email for exclusive early access ..."
                className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
            />

            <button
                onClick={(e) => e.stopPropagation()}
                type="submit"
                className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-gray-50 to-gray-400 px-4 py-3 text-sm font-medium text-gray-900 transition-transform active:scale-[0.985]"
            >
                <span>Submit Email</span>
                <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
            </button>

            <div className="pointer-events-none absolute inset-0  rounded-full">
                <motion.div
                    style={{
                        backgroundImage,
                    }}
                    className="mask-with-browser-support absolute -inset-[1px] rounded-full border border-transparent bg-origin-border "
                />
            </div>
        </form>
    );
};

export { EmailInput };