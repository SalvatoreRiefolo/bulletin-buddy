package com.github.bulletinboard.repositories;


import com.github.bulletinboard.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
