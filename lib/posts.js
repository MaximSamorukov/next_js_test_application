import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data/markdown');

export function getSortedPostsData(id) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  if (id) {
    return allPostsData.find((item) => item.id === id)
  } else {
    return allPostsData.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

export function fetchPosts(id) {
   const url = id ? `https://jsonplaceholder.typicode.com/posts/${id}` : 'https://jsonplaceholder.typicode.com/posts';
   return fetch(url).then((response) => {
      try {
         const data = response?.json();
         return data;
      } catch (error) {
         throw(new Error(error));
      }
   }).catch((error) => {
      console.log('Error fetching', error);
      return {
         name: error?.name,
         error: error?.message,
      };
   });
}