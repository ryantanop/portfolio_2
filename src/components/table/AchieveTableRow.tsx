import SkillCard from "../card/SkillCard"

interface AchieveData {
    Year: number,
    Project: string,
    MadeAt: string,
    BuiltWith: string,
    Link: string
}

interface AchieveTableRowProps {
    data: AchieveData
}

export default function AchiveTableRow({ data }: AchieveTableRowProps) {
    return <div className="flex items-center w-full border-b border-white/5 text-white h-[80px]" key={`project ${data.Project}`}>
        <div className="w-1/12 text-white/70">
            {data.Year}
        </div>
        <div className="w-1/4 font-bold">
            {data.Project}
        </div>
        <div className="w-1/6 text-white/70">
            {data.MadeAt}
        </div>
        <div className="w-1/3">
            {data.BuiltWith.split(' ').map((skill, index) => <SkillCard key={`Skill ${index}`} skill={skill} />)}
        </div>
        <div className="w-1/5 text-white/70 text-[14px]">
            <p className="cursor-pointer my-[50px] group/arrowmove hover:text-[rgb(94_234_212)]" onClick={() => { window.open('/Loi Nguyen Resume.pdf', '_blank') }}>
                <a href={data.Link} target="_blank">{data.Link}</a>
                <span className="relative left-0 top-0 group-hover/arrowmove:left-[5px] group-hover/arrowmove:top-[-5px] transition-all duration-100 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                </span>
            </p>

        </div>
    </div>
}
