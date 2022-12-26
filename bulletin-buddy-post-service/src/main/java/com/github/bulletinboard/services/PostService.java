package com.github.bulletinboard.services;

import com.github.bulletinboard.models.Post;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class PostService {
    List<Post> posts = new ArrayList<>();

    public List<Post> getAllPosts() {
        return posts;
    }

    public void removeAllPosts() {
        posts.clear();
    }

    public void addPost(Post post) {
        posts.add(post);
    }

    public Post getPostById(UUID id) {
        for(int i = 0; i < posts.size(); i++) {
            if(posts.get(i).getId().equals(id)){
                return posts.get(i);
            }
        }
        return null;
    }
}
