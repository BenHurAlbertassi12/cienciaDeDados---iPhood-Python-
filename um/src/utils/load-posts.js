export const loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');

    const postsJson = await postsResponse.json();
    const photosJson = await photosResponse.json();

    return postsJson.map((post, index) => {
        return { ...post, cover: photosJson[index].url };
    });
}