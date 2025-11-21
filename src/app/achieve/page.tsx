'use client'
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import AchiveTableRow from "@/components/table/AchieveTableRow";
import { Prev_Projects } from '../../static_data/Static_Data'

export default function Achieve() {
    const followerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${e.pageX - 500}px, ${e.pageY - 500}px, 0)`;
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className="w-screen h-screen bg-[rgb(15_23_42)] overflow-hidden selection:bg-[rgb(94_234_212)]">
        <div className="fixed justify-center flex w-screen h-screen text-white overflow-y-scroll">
            <div className="w-[1280px] mt-[70px]">
                <p className="flex items-center cursor-pointer my-[50px] text-white/80 group/arrowmove hover:text-[rgb(94_234_212)]" onClick={() => { router.push('/') }}>
                    <span className="group-hover/arrowmove:left-[-5px] left-0 relative transition-all duration-100 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
                    </span>
                    <span className="border-b border-[rgb(94_234_212)]/0 group-hover/arrowmove:text-[rgb(94_234_212)] transition-all duration-100">Loi Nguyen</span>
                </p>
                <p className="text-white text-[45px] font-bold text-white/90">All Projects</p>
                <div className="flex items-center w-full border-b border-white/1 text-white h-[50px] font-bold mt-[30px]">
                    <div className="w-1/12">
                        Year
                    </div>
                    <div className="w-1/4">
                        Project
                    </div>
                    <div className="w-1/6">
                        MadeAt
                    </div>
                    <div className="w-1/3">
                        Built with
                    </div>
                    <div className="w-1/6">
                        Link
                    </div>
                </div>
                {Prev_Projects.map((project, index) =>
                    <AchiveTableRow key={`Achieve ${index}`} data={{ Year: project.year, Project: project.title, MadeAt: project.MadeAt, BuiltWith: project.skill, Link: project.link }} />
                )}
            </div>
        </div>
        <div
            ref={followerRef}
            className="flex justify-center items-center relative w-[1000px] h-[1000px] rounded-full pointer-events-none fixed opacity-30"
            style={{
                background: "radial-gradient(circle, rgba(30,46,84,0.2) 0%, rgba(15,23,42,0.2) 40%)",
            }}
        >
            <div
                className="flex justify-center items-center relative w-[750px] h-[750px] rounded-full pointer-events-none fixed"
                style={{
                    background: "radial-gradient(circle, rgba(30,46,84,0.2) 0%, rgba(15,23,42,0.2) 50%)",
                }}
            >
                <div
                    className="flex justify-center items-center relative w-[500px] h-[500px] rounded-full pointer-events-none fixed"
                    style={{
                        background: "radial-gradient(circle, rgba(30,46,84,0.2) 0%, rgba(15,23,42,0.2) 60%)",
                    }}
                >
                    <div
                        className="flex justify-center items-center relative w-[250px] h-[250px] rounded-full pointer-events-none fixed"
                        style={{
                            background: "radial-gradient(circle, rgba(30,46,84,0.2) 0%, rgba(15,23,42,0.2) 70%)",
                        }}
                    >
                    </div>
                </div>
            </div>
        </div>
    </div>
}
