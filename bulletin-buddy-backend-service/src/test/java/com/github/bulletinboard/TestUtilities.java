package com.github.bulletinboard;

import com.github.bulletinboard.services.CommentService;

public class TestUtilities {

    public static CommentService createCommentServiceWithMessageCount(int count){
        CommentService commentService = new CommentService();
        for (int i = 0; i < count; i++){
            commentService.addComment(Integer.toString(i));
        }
        return commentService;
    }
}
