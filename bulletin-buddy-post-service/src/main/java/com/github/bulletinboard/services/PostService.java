package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public void removeAllPosts() {
        postRepository.deleteAll();
    }

    public void addPost(Post post) {
        if (post.getId() == null) {
            post.setId(UUID.randomUUID());
        }
        postRepository.saveAndFlush(post);
    }

    public Post getPostById(UUID id) {
        List<Post> posts = postRepository.findAllById(Arrays.asList(id));
        if(posts.size() > 0) {
            return posts.get(0);
        }
       return null;
    }
}
