// Simulating API calls with promises
function fetchPost(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched post data");
            resolve({
                id: postId,
                title: "Understanding Async/Await",
                content: "Async/ Await makes asynchronous code more readable",
            });
        }, 1000) // Simulating network delay
    })
}

function fetchComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched comments");
            resolve([
                { id: 1, text: "Great article", author: 101 },
                { id: 2, text: "Thanks for explaining this", author: 102 }
            ]);
        }, 1200);
    });
}

function fetchAuthorInfo(authorId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Fetched author info for ${authorId}`);

            if (authorId === 101) {
                resolve({ id: 101, name: "Farhad", bio: "JavaScript enthusiast" })
            } else if (authorId === 102) {
                resolve({ id: 102, name: "Alice", bio: "Web Developer" })
            } else {
                reject(new Error("Author not found"))
            }
        }, 800);
    });
}

// Using async/await to coordinate these operations
async function getPostWithDetails(postId) {
    try {
        // Get post data
        const post = await fetchPost(postId);

        // Get comments for this post
        const comments = await fetchComments(post.id);

        // For each comment get the author info
        // Note: using the Promise.all to fetch all author info in parallel
        const commentsWithAuthors = await Promise.all(
            comments.map(async (comment) => {
                const author = await fetchAuthorInfo(comment.author);

                // Return a new object with all comments plus author details
                return { ...comment, author };
            })
        );

        // Combine everything into a complete post object
        const completePost = {
            ...post,
            comments: commentsWithAuthors
        };

        return completePost;
    } catch (error) {
        console.error("Error fetching post details:", error);
        throw error; // re-throw to allow callers to also handle the error
    }
}

// Usage
async function displayPost() {
    try {
        console.log("Starting to fetch post data...");
        const post = await getPostWithDetails(1);
        console.log("Complete post data:", JSON.stringify(post, null, 2));
    } catch (error) {
        console.error("Failed to display error:", error);
    }
}

displayPost();