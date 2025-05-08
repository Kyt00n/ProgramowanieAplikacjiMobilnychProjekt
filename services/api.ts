export const JsonPlaceholderAPI = {
    BASE_URL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
}
const getPhotos = (id: number) => {
    const photos: string[] = [];
    for (let i = 0; i < 6; i++) {
        photos.push(`https://picsum.photos/id/${id + (5 * i)}/200/300`);
    }
    return photos;
};
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

export const getPostById = async (id: string) => {
    const endpoint = `${JsonPlaceholderAPI.BASE_URL}/posts/${id}`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: JsonPlaceholderAPI.headers,
    })
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const post = await response.json()
    const thumbnailUrl = `https://picsum.photos/id/${post.id}/200/300`;
    const photos = getPhotos(post.id);
    const postWithThumbnail = { ...post, thumbnailUrl, photos };
    return postWithThumbnail
}

export const getUserById = async (id: string) => {
    const endpoint = `${JsonPlaceholderAPI.BASE_URL}/users/${id}`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: JsonPlaceholderAPI.headers,
    })
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    const user = await response.json()
    return user
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
export const getSavedPosts = async ({userId}: {userId: string}) => {
    const endpoint = `${JsonPlaceholderAPI.BASE_URL}/users/${userId}/posts`

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

