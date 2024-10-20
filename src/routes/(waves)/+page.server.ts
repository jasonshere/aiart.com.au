import features from '$lib/data/features';
import { filteredPosts } from '$lib/data/blog-posts';
import { getWorkExperience, yearsOfExperience } from '$lib/data/work-experiences/api';

export async function load() {
  const posts = filteredPosts.slice(0, 4);
  const workExperience = await getWorkExperience();

  return {
    features,
    posts,
    yearsOfExperience,
    experienceEntries: workExperience,
  };
}
