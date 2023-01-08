package com.github.bulletinboard;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.repositories.PostRepository;
import com.github.bulletinboard.services.PostService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class PostServiceTests {

    private static UUID POST_1_ID = UUID.fromString("810b3429-0c80-4b8f-895b-20a4f68c1491");
    private static UUID POST_2_ID = UUID.fromString("810b3429-0c80-4b8f-895b-20a4f68c1491");
    private static UUID POST_3_ID = UUID.fromString("810b3429-0c80-4b8f-895b-20a4f68c1491");

    @Mock
    private PostRepository postRepository;

    @InjectMocks
    private PostService postService;

	@Test
	void contextLoads() {
	}

    @Test
	void postService_GetAllPosts_ShouldReturnCorrectNumberOfPosts(){
		// ARRANGE
        Post post1 = TestUtilities.createAnOffer(POST_1_ID);
        Post post2 = TestUtilities.createAnOffer(POST_2_ID);
        Post post3 = TestUtilities.createAnOffer(POST_3_ID);

        when(postRepository.findAll()).thenReturn(Arrays.asList(post1, post2, post3));

		// ACT
		int offerCount = postService.getAllPosts().size();

		//ASSERT
		assertEquals(offerCount, 3);
	}

	@Test
	void postService_removeAllPosts_ShouldRemoveAllEntries(){
		// ARRANGE
        when(postRepository.findAll()).thenReturn(new ArrayList<Post>());

		// ACT
		postService.removeAllPosts();

		// ASSERT
		int offerCount = postService.getAllPosts().size();
		assertEquals(offerCount, 0);
	}

	@Test
	void postService_addOffer_ShouldAddOneOffer(){
		// ARRANGE
        Post post = TestUtilities.createAnOffer(POST_1_ID);

        when(postRepository.saveAndFlush(any(Post.class))).thenReturn(post);
        when(postRepository.findAll()).thenReturn(Arrays.asList(post));

		// ACT
		postService.addPost(post);

		// ASSERT
		int offerCount = postService.getAllPosts().size();
		assertEquals(offerCount, 1);
	}


}
