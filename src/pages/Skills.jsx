import SkillsCard from "../components/SkillsCard";

export default function Skills() {
  return (
    <div className="my-20">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mx-4">
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
        <SkillsCard />
      </div>
    </div>
  );
}
