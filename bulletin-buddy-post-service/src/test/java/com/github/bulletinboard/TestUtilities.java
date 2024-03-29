package com.github.bulletinboard;

import java.util.UUID;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.services.PostService;

public class TestUtilities {

    public static PostService createPostServiceWithMessageCount(int count){
        PostService postService = new PostService();
        for (int i = 0; i < count; i++){
            postService.addPost(createAnOffer());
        }
        return postService;
    }

    public static Post createAnOffer(){
        return new Post(new UUID(1, 2),"title sample", "body sample", "email@email.com", Post.PostType.OFFER);
    }

    public static Post createAnOffer(UUID id){
        return new Post(id,"title sample", "body sample", "email@email.com", Post.PostType.OFFER);
    }
}
