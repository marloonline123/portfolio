import React from 'react';
import { motion } from 'framer-motion';
import { useTrans } from '@/hooks/use-trans';
import { Skill } from '@/types/skill';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const trans = useTrans();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-dark-card rounded-xl p-6 shadow-sm"
    >
      <h4 className="font-semibold mb-2">{trans(skill.name)}</h4>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
          {trans(skill.item_1)}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
          {trans(skill.item_2)}
        </li>
        <li className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500"></span>
          {trans(skill.item_3)}
        </li>
      </ul>
    </motion.div>
  );
};

export default SkillCard;