import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

import { IProject, projectsData } from '@/assets/data';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<IProject>(projectsData[0]);

  const [projects] = useState<IProject[]>(projectsData);

  return (
    <SectionContent>
      <div className={clsx('flex', 'lg:gap-12')}>
        <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
          <div className={clsx('flex flex-col gap-3')}>
            {projects.map((project) => (
              <SectionButton
                title={project.name}
                icon={
                  <Image
                    width={40}
                    height={40}
                    src={project.img}
                    alt={project.name}
                    className="h-16 w-16 rounded-full"
                  />
                }
                description={`${project?.description?.substring(0, 50)}...`}
                active={currentState?.id === project.id}
                onClick={() => setCurrentState(project)}
              />
            ))}
          </div>
        </div>
        <div className={clsx('w-full', 'lg:w-auto')}>
          <div className={clsx('-mt-[41px]')}>
            <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
              <AppWindow
                currentPro={currentState}
                type="browser"
                browserTabs={projects?.map((project) => ({
                  icon: (
                    <Image
                      width={10}
                      height={10}
                      src={project.img}
                      alt={project.name}
                      className="h-4 w-4 rounded-full"
                      onClick={() => {
                        setCurrentState(project);
                      }}
                    />
                  ),
                  title: project?.name,
                  isActive: currentState?.id === project?.id,
                  action: () => setCurrentState(project),
                }))}
              >
                <GitHubWireframe
                  author="Huu Taidev"
                  license="2021"
                  repository={currentState?.linkGitBackend}
                  description={currentState?.description}
                />
                {/* {currentState === 'github' && (
                  <GitHubWireframe
                    author="Huu Taidev"
                    license="MIT"
                    repository="tailwindcss-accent"
                    description="Adds accent colors for more dynamic and flexible color utilization."
                  />
                )}
                {currentState === 'npm' && (
                  <NpmWireframe
                    packageName="tailwindcss-accent"
                    description="Adds accent colors for more dynamic and flexible color utilization."
                    isWithTypeScript
                  />
                )} */}
              </AppWindow>
            </div>
          </div>
        </div>
      </div>
    </SectionContent>
  );
}

export default ProjectsContents;
