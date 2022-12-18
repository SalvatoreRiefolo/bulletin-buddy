package com.github.bulletinboard.repositories;


import com.github.bulletinboard.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    List<Comment> findByOfferId(UUID offerId);

    Comment findByCommentId(UUID commentId);

}
