export const JsonPlaceholderAPI = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
}
export const getPosts = async ({query}: {query: string}) => {
    const endpoint = query ?
     `${JsonPlaceholderAPI.BASE_URL}/posts?title_like=${query}` :
      `${JsonPlaceholderAPI.BASE_URL}/posts`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: JsonPlaceholderAPI.headers,
    })
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const posts = await response.json()
    const postsWithThumbnails = posts.map((post: any) => {
        const thumbnailUrl = `https://picsum.photos/id/${post.id}/200/300`;
        return { ...post, thumbnailUrl };
    });

    return postsWithThumbnails;
}

export const getPhotosByPost = async ({postId, photoId}: {postId:number, photoId?: number}) => {
    const endpoint = photoId ?
     `${JsonPlaceholderAPI.BASE_URL}/posts/${postId}/photos?id=${photoId}` :
      `${JsonPlaceholderAPI.BASE_URL}/posts/${postId}/photos`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: JsonPlaceholderAPI.headers,
    })
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
}

