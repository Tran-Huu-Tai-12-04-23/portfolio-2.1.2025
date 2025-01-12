// eslint-disable-next-line simple-import-sort/imports
import Page from '@/contents-layouts/Page';
import HeaderImage from '@/contents/blog/HeaderImage';
import ExperienceContents from '@/contents/experience';

function Experience() {
  return (
    <Page
      frontMatter={{
        title: 'My experience between code and learning',
        description: `I'm a software engineer who loves to learn and share knowledge. I write about my experience, coding, and learning.`,
      }}
      headerImage={<HeaderImage />}
    >
      <ExperienceContents />
    </Page>
  );
}

export default Experience;
