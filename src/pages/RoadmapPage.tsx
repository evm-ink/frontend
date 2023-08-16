import { Helmet } from 'react-helmet-async'

import ProjectTimeline from '@/components/ProjectTimeline'

import { getPlatformNamePrefix } from '@/utils/getPlatformNamePrefix'

const RoadmapPage = () => {
  return (
    <main>
      <Helmet>
        <title>{getPlatformNamePrefix()}scription Roadmap</title>
      </Helmet>
      <div className="w-full min-h-[calc(100vh-170px)] py-10 pl-5 flex flex-col items-center justify-center gap-20">
        <h1 className="mb-10 text-6xl font-extrabold text-black dark:text-white">
          {getPlatformNamePrefix()}scription Roadmap
        </h1>
        <ProjectTimeline className="xl:w-2/3 w-full max-w-[800px] mb-20" />
      </div>
    </main>
  )
}

export default RoadmapPage
