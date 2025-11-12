import { demoStories } from '@/demo';
import StoryCard from './components/StoryCard';

export default function CommunityStories() {
  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-[#181211] dark:text-white mb-6">
          Community Stories
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {demoStories.map((story) => (
            <StoryCard
              key={story.id}
              name={story.name}
              action={story.action}
              image={story.image}
              story={story.story}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
