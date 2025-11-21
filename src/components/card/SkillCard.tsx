
interface SkillCardProps {
    skill: string
}

export default function SkillCard({ skill }: SkillCardProps) {
    return <p className="text-[rgb(94_234_212)] bg-[rgb(94_234_212)]/20 inline-block py-[6px] px-[12px] rounded-2xl mr-[10px] text-[12px] font-medium">
        {skill}
    </p>
}