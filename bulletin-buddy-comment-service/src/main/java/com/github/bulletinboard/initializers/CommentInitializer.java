package com.github.bulletinboard.initializers;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.services.CommentService;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class CommentInitializer implements InitializingBean {

    @Autowired
    private CommentService commentService;

    @Override
    public void afterPropertiesSet() throws Exception {
        Comment c1 = new Comment();
        c1.setPostId(UUID.fromString("bb27a1b0-9602-4d1c-9a76-6ab5dca69837"));
        c1.setPosterEmail("test@test.com");
        c1.setContent("Comment 1");

        Comment c2 = new Comment();
        c2.setPostId(UUID.fromString("bb27a1b0-9602-4d1c-9a76-6ab5dca69837"));
        c2.setPosterEmail("test@test.com");
        c2.setContent("Comment 2");

        Comment c3 = new Comment();
        c3.setPostId(UUID.fromString("bb27a1b0-9602-4d1c-9a76-6ab5dca69837"));
        c3.setPosterEmail("test@test.com");
        c3.setContent("Comment 3");

        Comment c4 = new Comment();
        c4.setPostId(UUID.fromString("1240ceb0-2d1b-4fb3-89e1-c30089b5222f"));
        c4.setPosterEmail("test@test.com");
        c4.setContent("Comment 4");

        Comment c5 = new Comment();
        c5.setPostId(UUID.fromString("1240ceb0-2d1b-4fb3-89e1-c30089b5222f"));
        c5.setPosterEmail("test@test.com");
        c5.setContent("Comment 5");

        commentService.addComment(c1);
        commentService.addComment(c2);
        commentService.addComment(c3);
        commentService.addComment(c4);
        commentService.addComment(c5);

    }
}
