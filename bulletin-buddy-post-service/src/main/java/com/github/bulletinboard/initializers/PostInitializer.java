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
        p1.setTitle("Takimata");
        p1.setBody("Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
        p1.setPublisherEmail("franz.poster@test.com");
        p1.setType(Post.PostType.REQUEST);

        Post p2 = new Post();
        p2.setId(UUID.fromString("1240ceb0-2d1b-4fb3-89e1-c30089b5222f"));
        p2.setTitle("Ut labore");
        p2.setBody("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, " +
                "sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");
        p2.setPublisherEmail("jane.doe@test.com");
        p2.setType(Post.PostType.OFFER);

        Post p3 = new Post();
        p3.setId(UUID.fromString("fb32d795-1cee-4935-82a9-74b45a0d826e"));
        p3.setTitle("kasd gubergren");
        p3.setBody("At vero eos et accusam et justo duo dolores et ea rebum." +
                " Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
        p3.setPublisherEmail("gerhard.testposter@test.com");
        p3.setType(Post.PostType.REQUEST);

        Post p4 = new Post();
        p4.setId(UUID.fromString("2019c418-711d-488f-8853-822417551f69"));
        p4.setTitle("Vero accusam");
        p4.setBody("At vero eos et accusam et justo duo dolores et ea rebum. ");
        p4.setPublisherEmail("claudia.tester@test.com");
        p4.setType(Post.PostType.OFFER);

        postService.addPost(p1);
        postService.addPost(p2);
        postService.addPost(p3);
        postService.addPost(p4);
    }
}
