package com.github.bulletinboard.initializers;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class CommentInitializer implements InitializingBean {

    private final UUID POST_ID_1 = UUID.fromString("bb27a1b0-9602-4d1c-9a76-6ab5dca69837");
    private final UUID POST_ID_2 = UUID.fromString("1240ceb0-2d1b-4fb3-89e1-c30089b5222f");

    @Autowired
    private CommentService commentService;

    @Override
    public void afterPropertiesSet() throws Exception {
        Comment c1 = new Comment();
        c1.setPostId(POST_ID_1);
        c1.setPosterEmail("claudia.tester@test.com");
        c1.setContent("Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");

        Comment c2 = new Comment();
        c2.setPostId(POST_ID_1);
        c2.setPosterEmail("gerhard.testposter@test.com");
        c2.setContent("Lorem ipsum dolor sit amet, consetetur sadipscing elitr.");

        Comment c3 = new Comment();
        c3.setPostId(POST_ID_1);
        c3.setPosterEmail("jane.doe@test.com");
        c3.setContent("No sea takimata sanctus est Lorem ipsum dolor sit amet.");

        Comment c4 = new Comment();
        c4.setPostId(POST_ID_2);
        c4.setPosterEmail("claudia.tester@test.com");
        c4.setContent(" At vero eos et accusam et justo duo dolores et ea rebum.");

        Comment c5 = new Comment();
        c5.setPostId(POST_ID_2);
        c5.setPosterEmail("gerhard.testposter@test.com");
        c5.setContent("Dolor sit amet.");

        // commentService.addComment(c1);
        // commentService.addComment(c2);
        // commentService.addComment(c3);
        // commentService.addComment(c4);
        // commentService.addComment(c5);

    }
}
