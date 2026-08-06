import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

const tasks = [
  'How to code an app in Python',
  'How to build charts with data in Excel',
  'How to edit profile of users on GitHub',
  'How to set up a custom task rule in Asana',
  'How to design a form in Sheets',
  'How to build a custom webhook in Slack',
  'How to sync a dashboard in Excel',
  'How to create a team member in Canva',
  'How to link a custom project page in Jira',
];

const taskCount = tasks.length;
const duplicatedTasks = [...tasks, ...tasks, ...tasks];

type AnimatedTaskListProps = {
  icon: ReactNode;
};

export default function AnimatedTaskList({ icon }: AnimatedTaskListProps) {
  const [index, setIndex] = useState(taskCount);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current < taskCount * 2 ? current + 1 : current));
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index !== taskCount * 2) return;

    const reset = window.setTimeout(() => {
      setShouldAnimate(false);
      setIndex(taskCount);
    }, 1000);

    return () => window.clearTimeout(reset);
  }, [index]);

  useEffect(() => {
    if (index !== taskCount || shouldAnimate) return;

    const resume = window.setTimeout(() => setShouldAnimate(true), 50);
    return () => window.clearTimeout(resume);
  }, [index, shouldAnimate]);

  return (
    <div className="relative mx-auto h-[220px] w-full max-w-[340px] select-none overflow-hidden text-left md:max-w-[420px]">
      <div className="pointer-events-none absolute left-0 top-0 z-0 flex h-[54px] w-full items-center rounded-xl border border-white/20 bg-white/[0.08] px-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md">
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-lg border border-white/40 bg-white shadow-sm">
          {icon}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        {duplicatedTasks.map((task, itemIndex) => {
          const distance = itemIndex - index;
          const isActive = distance === 0;

          let y = 68 + (distance - 1) * 22;
          let opacity = 0;
          let height = 22;
          let blur = 0;

          if (isActive) {
            y = 0;
            height = 54;
            opacity = 1;
          } else if (distance < 0) {
            y = -35;
            height = 30;
          } else if (distance === 1) {
            opacity = 0.55;
            blur = 0.2;
          } else if (distance === 2) {
            opacity = 0.36;
            blur = 0.4;
          } else if (distance === 3) {
            opacity = 0.22;
            blur = 0.6;
          } else if (distance === 4) {
            opacity = 0.11;
            blur = 0.8;
          } else if (distance === 5) {
            opacity = 0.04;
            blur = 1.1;
          }

          return (
            <motion.div
              key={`${task}-${itemIndex}`}
              className="absolute left-0 flex w-full select-none items-center justify-start"
              animate={{ y, opacity }}
              style={{ height, filter: `blur(${blur}px)` }}
              transition={shouldAnimate ? { duration: 1, ease: [0.16, 1, 0.3, 1] } : { duration: 0 }}
            >
              {isActive ? (
                <div className="flex flex-col justify-center pl-[58px] text-left">
                  <span className="mb-1 text-[7.5px] font-bold uppercase leading-none tracking-wider text-white/50">
                    Learn the step
                  </span>
                  <span className="text-[12.5px] font-medium leading-none tracking-tight text-white md:text-[13px]">
                    {task}
                  </span>
                </div>
              ) : (
                <div className="flex items-center pl-[58px] text-left">
                  <span className="text-[11.5px] font-normal leading-none tracking-tight text-white/70 md:text-[12px]">
                    {task}
                  </span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
