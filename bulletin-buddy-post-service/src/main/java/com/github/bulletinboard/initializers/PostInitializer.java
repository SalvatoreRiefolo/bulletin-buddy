package com.github.bulletinboard.initializers;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.services.PostService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class PostInitializer implements InitializingBean {

    @Autowired
    private PostService postService;

    @Override
    public void afterPropertiesSet() throws Exception {
        Post p1 = new Post();
        p1.setId(UUID.fromString("bb27a1b0-9602-4d1c-9a76-6ab5dca69837"));
        p1.setTitle("Post 1 Title");
        p1.setBody("Post 1 Body");
        p1.setPublisherEmail("test@test.com");

        Post p2 = new Post();
        p2.setId(UUID.fromString("1240ceb0-2d1b-4fb3-89e1-c30089b5222f"));
        p2.setTitle("Post 2 Title");
        p2.setBody("Post 2 Body");
        p2.setPublisherEmail("test@test.com");

        Post p3 = new Post();
        p3.setId(UUID.fromString("fb32d795-1cee-4935-82a9-74b45a0d826e"));
        p3.setTitle("Post 3 Title");
        p3.setBody("Post 3 Body");
        p3.setPublisherEmail("test@test.com");

        Post p4 = new Post();
        p4.setId(UUID.fromString("2019c418-711d-488f-8853-822417551f69"));
        p4.setTitle("Post 4 Title");
        p4.setBody("Post 4 Body");
        p4.setPublisherEmail("test@test.com");

        postService.addPost(p1);
        postService.addPost(p2);
        postService.addPost(p3);
        postService.addPost(p4);
    }
}
