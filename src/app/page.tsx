'use client'
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import SkillCard from "@/components/card/SkillCard";
import { Work_Experience } from '../static_data/Static_Data';
import { Projects } from '../static_data/Static_Data';

export default function Home() {
  const followerRef = useRef<HTMLDivElement>(null);
  const ExperienceRef = useRef<HTMLDivElement>(null);
  const ProjectsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [posStatus, setPosStatus] = useState(1);
  const [hoverExperience, setHoverExperience] = useState(-1);
  const [hoverProject, setHoverProject] = useState(-1);
  const [hoverBlog, setHoverBlog] = useState(-1);
  const [sectionButtonHover, setSectionButtonHover] = useState(-1);

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

  const handleOnScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    let scrollY = target.scrollTop;
    if (ExperienceRef.current && ProjectsRef.current) {
      const rect1 = ExperienceRef.current.getBoundingClientRect();
      const yFromPage1 = rect1.top + window.scrollY;
      const rect2 = ProjectsRef.current.getBoundingClientRect();
      const yFromPage2 = rect2.top + window.scrollY;
      if (yFromPage2 < scrollY) {
        setPosStatus(3);
      } else if (yFromPage1 < scrollY) {
        setPosStatus(2);
      } else {
        setPosStatus(1);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-[rgb(15_23_42)] overflow-hidden selection:bg-[rgb(94_234_212)]">
      <div className="fixed flex justify-center w-screen h-screen text-white overflow-y-scroll lg:p-0 lg:p-[50px] p-[20px]" onScroll={handleOnScroll}>
        <div className="block lg:flex md:block sm:block w-[1200px] xl:w-[1200px] w-full md:py-[100px]">
          <div className="lg:fixed block relative w-[350px] lg:h-full lg:mb-0 mb-[100px]">
            <div className="w-full">
              <p className="text-[50px] font-bold text-white/80">Loi Nguyen</p>
              <p className="text-[20px] my-[20px] text-white/80">Senior Software Engineer Tech Lead</p>
              <p className="text-[18px] text-white/50 mb-[30px]">I build accessible, pixel-perfect digital experiences for the web.</p>
              <div className="lg:block hidden">
                <a href="#section1" onMouseEnter={() => setSectionButtonHover(1)} onMouseLeave={() => setSectionButtonHover(-1)}>
                  <div className="flex items-center h-[50px] cursor-pointer">
                    <div className={`border mr-[20px] transition-all duration-100 ease-in-out ShowAbout`}
                      style={{ width: `${posStatus == 1 || sectionButtonHover == 1 ? 100 : 50}px`, borderColor: posStatus == 1  || sectionButtonHover == 1? 'white' : 'rgba(255, 255, 255, 0.5)' }}
                    />
                    {posStatus == 1 || sectionButtonHover == 1 ? <p className="text-[15px]">About</p> : <p className="text-[15px] text-white/50">About</p>}
                  </div>
                </a>
                <a href="#section2" onMouseEnter={() => setSectionButtonHover(2)} onMouseLeave={() => setSectionButtonHover(-1)}>
                  <div className="flex items-center h-[50px] cursor-pointer">
                    <div className={`border mr-[20px] transition-all duration-100 ease-in-out`} style={{ width: `${posStatus == 2 || sectionButtonHover == 2? 100 : 50}px`, borderColor: posStatus == 2 || sectionButtonHover == 2? 'white' : 'rgba(255, 255, 255, 0.5)' }} /> {posStatus == 2 || sectionButtonHover == 2 ? <p className="text-[15px]">Experience</p> : <p className="text-[15px] text-white/50">Experience</p>}
                  </div>
                </a>
                <a href="#section3" onMouseEnter={() => setSectionButtonHover(3)} onMouseLeave={() => setSectionButtonHover(-1)}>
                  <div className="flex items-center h-[50px] cursor-pointer">
                    <div className={`border mr-[20px] transition-all duration-100 ease-in-out`} style={{ width: `${posStatus == 3 || sectionButtonHover == 3? 100 : 50}px`, borderColor: posStatus == 3 || sectionButtonHover == 3 ? 'white' : 'rgba(255, 255, 255, 0.5)' }} /> {posStatus == 3 || sectionButtonHover == 3 ? <p className="text-[15px]">Project</p> : <p className="text-[15px] text-white/50">Project</p>}
                  </div>
                </a>
              </div>
            </div>
            <div className="flex justify-between absolute mb-[20px] left-[0px] lg:bottom-[170px] w-[170px] h-[50px]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6 cursor-pointer opacity-50 hover:opacity-100" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 cursor-pointer opacity-50 hover:opacity-100" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 cursor-pointer opacity-50 hover:opacity-100" aria-hidden="true"><path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" strokeWidth="5"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor" className="h-6 w-6 cursor-pointer opacity-50 hover:opacity-100" aria-hidden="true"><path d="M663.8 382.4c10.2 74.6-9.4 158-71.8 201.4-44.6 31-105.6 28.2-141.6 11.4-74.2-34.6-99-117.2-93.6-194.4 8.6-121.8 81.8-175.8 150.6-175 93.8-0.4 143.6 63.6 156.4 156.6zM960 176v672c0 61.8-50.2 112-112 112H176c-61.8 0-112-50.2-112-112V176c0-61.8 50.2-112 112-112h672c61.8 0 112 50.2 112 112zM724 626.4s-0.2-68-0.2-434.6h-58v80.6c-1.6 0.6-2.4-1-3.2-2.4-19.2-41.4-71.8-92.6-152-92-103.8 0.8-174.4 62.4-201.2 155.6-8.6 29.8-11.6 60.2-11 91.2 3.4 155.8 90.2 235.6 224.8 230.4 57.8-2.2 109-34 138-90.4 1-2 2.2-3.8 3.4-5.8 0.4 0.2 0.8 0.2 1.2 0.4 0.6 7.6 0.4 61.4 0.2 69-0.4 29.6-4 59-14.4 87-15.6 42-44.6 69.4-89 79-35.6 7.8-71.2 7.6-106.4-2.4-43-12.2-73-38-82.2-83.6-0.6-3.2-2.6-2.6-4.6-2.6h-53.6c1.6 21.2 6.4 40.6 17 58.4 48.4 81 165.4 97 256.4 74.8 99.8-24.6 134.6-109.8 134.8-212.6z" fill=""></path></svg>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 md:w-full pr-[180px] h-[1px]" />
          <div className="w-full lg:w-3/5 md:w-full" id="section1">
            <p className="lg:hidden font-bold text-[17px] mb-[30px] text-white/80 lg:mt-0 mt-[50px]">ABOUT</p>
            <p className="mb-[100px] text-white/70"> Senior Software Engineer and Tech Lead with 10+ years of experience building scalable platforms and data systems at <span className="cursor-pointer text-white/80 hover:text-[rgb(94_234_212)] font-bold">NBC</span>, <span className="cursor-pointer text-white/80 hover:text-[rgb(94_234_212)] font-bold">Disney</span> and <span className="cursor-pointer text-white/80 hover:text-[rgb(94_234_212)] font-bold">Microsoft</span>. Skilled in backend, distributed systems, Al automation, and data pipelines, with expertise in AWS, Spark, Airflow, and
              Kubernetes. Proven track record in fraud prevention, risk modeling, and team leadership, delivering secure, high-impact solutions that
              drive
              <span className="ml-[5px] font-bold text-transparent bg-clip-text bg-[linear-gradient(90deg,white_40%,#ff0000,#00ff00,#0000ff)] bg-[length:250%_100%] transition-all uration-500 hover:bg-[position:100%_0]" style={{ cursor: "url('/Paritosh.png') 16 16, auto" }}>business growth.</span>
            </p>
            {/* NBCUniversal */}
            <div ref={ExperienceRef} id='section2'>
              {Work_Experience.map((val, index) =>
                <div className={(hoverExperience != -1 && hoverExperience != index ? "opacity-30 " : "") + "block sm:flex w-full rounded-lg hover:bg-white/3 cursor-pointer  lg:p-[30px] mb-[20px] border border-white/0 hover:border hover:border-white/5 group/arrowmove"} key={"work experience " + index} onMouseEnter={() => { setHoverExperience(index) }} onMouseLeave={() => setHoverExperience(-1)}>
                  <div className="sm:w-1/4 w-full text-white/50 text-sm">
                    {`${val.start_year} ~ ${val.end_year}`}
                  </div>
                  <div className="sm:w-3/4 w-full">
                    <div>
                      <h1 className="mb-[20px]">
                        {`${val.title} | ${val.company}`}
                        <span className="relative group-hover/arrowmove:left-[5px] group-hover/arrowmove:top-[-5px] group-hover/arrowmove:text-[rgb(94_234_212)]" >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                        </span>
                      </h1>
                      {
                        val.bullets.map((val1, index1) => <p className="text-white/70" key={`${index} bullet ${index1}`}>- {val1}</p>)
                      }
                      <div className="w-[10px] h-[20px]"></div>
                      {
                        val.skill.split(' ').map((val2, index2) => <SkillCard skill={val2} key={`${index} skillcard ${index2}`} />)
                      }
                    </div>
                  </div>
                </div>)}
            </div>
            <p className="cursor-pointer my-[50px] group/arrowmove hover:text-[rgb(94_234_212)]" onClick={() => { window.open('/Loi Nguyen Resume.pdf', '_blank') }}>
              View Full Résumé
              <span className="relative left-0 top-0 group-hover/arrowmove:left-[5px] group-hover/arrowmove:top-[-5px] transition-all duration-100 ease-in-out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
              </span>
            </p>
            <div ref={ProjectsRef} id='section3'>
              {Array.from({ length: 5 }).map((_, i) => <div className={(hoverProject != i && hoverProject != -1 ? "opacity-30 " : "") + "w-full block sm:flex rounded-lg hover:bg-white/3 my-[20px] cursor-pointer border border-white/0 hover:border hover:border-white/5 group/arrowmove lg:p-[20px]"} key={i} onMouseEnter={() => setHoverProject(i)} onMouseLeave={() => { setHoverProject(-1) }} onClick={() => { window.open(Projects[i].URL) }}>
                <div className="sm:w-1/4 w-full">
                  <img src={`/portfolio/${Projects[i].title}/1.png`} className="border-[3px] border-white/0 group-hover/arrowmove:border-white/50 w-[140px] h-[80px] rounded-sm" />
                </div>
                <div className="sm:w-3/4 w-full break-words lg:pl-[20px]">
                  <p className="text-[25px]">{Projects[i].title}
                    <span className="relative left-0 top-0 group-hover/arrowmove:left-[5px] group-hover/arrowmove:top-[-5px] group-hover/arrowmove:text-[rgb(94_234_212)] transition-all duration-100 ease-in-out" >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                    </span>
                  </p>
                  <p className="mb-[20px] text-white/70">{Projects[i].project_description}</p>
                  {
                    Projects[i].skill.split(' ').map((val2, index2) => <SkillCard skill={val2} key={`${i} skillcard ${index2}`} />)
                  }
                </div>
              </div>)}
            </div>
            <p className="cursor-pointer my-[50px] text-white/80 group/arrowmove" onClick={() => { router.push('/achieve') }}><span className="border-b border-[rgb(94_234_212)]/0 group-hover/arrowmove:border-[rgb(94_234_212)] transition-all duration-100">View Full Project Archieve</span><span className="group-hover/arrowmove:left-[10px] left-0 relative transition-all duration-100 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true"><path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd"></path></svg>
            </span></p>
            <div>
              {Array.from({ length: 3 }).map((_, i) => <div className={(hoverBlog != i && hoverBlog != -1 ? "opacity-30 " : "") + "w-full block sm:flex rounded-lg hover:bg-white/3 my-[20px] cursor-pointer border border-white/0 hover:border hover:border-white/5 group/arrowmove lg:p-[20px]"} key={i} onMouseEnter={() => setHoverBlog(i)} onMouseLeave={() => { setHoverBlog(-1) }} onClick={() => { window.open(Projects[i + 2].URL) }}>
                <div className="sm:w-1/4 w-full h-">
                  <img src={`/portfolio/${Projects[i + 2].title}/1.png`} className="border-[3px] border-white/0 group-hover/arrowmove:border-white/50 w-[140px] h-[80px] rounded-sm" />
                </div>
                <div className="sm:w-3/4 w-full break-words lg:pl-[20px]">
                  <p className="text-[25px]">{Projects[i + 2].title}
                    <span className="relative left-0 top-0 group-hover/arrowmove:left-[5px] group-hover/arrowmove:top-[-5px] group-hover/arrowmove:text-[rgb(94_234_212)] transition-all duration-100 ease-in-out" >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                    </span>
                  </p>
                  <p className="mb-[20px] text-white/70">{Projects[i].project_description}</p>
                  {
                    Projects[i].skill.split(' ').map((val2, index2) => <SkillCard skill={val2} key={`${i} skillcard ${index2}`} />)
                  }
                </div>
              </div>)}
            </div>
            <p className="py-[100px] w-2/3 text-[15px] text-white/50">
              Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.
            </p>
          </div>
        </div>
      </div>
      <div
        ref={followerRef}
        className="flex justify-center items-center relative w-[1000px] h-[1000px] rounded-full pointer-events-none fixed opacity-40"
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
                background: "radial-gradient(circle, rgba(60,92,168,0.2) 0%, rgba(30,46,84,0.2) 70%)",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
