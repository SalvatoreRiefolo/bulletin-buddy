package com.github.bulletinboard;

import com.github.bulletinboard.models.Post;
import com.github.bulletinboard.repositories.PostRepository;
import org.junit.ClassRule;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.util.TestPropertyValues;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.testcontainers.containers.PostgreSQLContainer;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ContextConfiguration(initializers = { PostRepositoryIntegrationTest.Initializer.class })
public class PostRepositoryIntegrationTest {

    private static UUID POST_1_ID = UUID.fromString("f26aef4a-317b-43cc-bf2d-e4afae2bd92c");
    private static UUID POST_2_ID = UUID.fromString("ed1f90d2-6c22-438a-b022-bdf1cb93b721");
    private static UUID POST_3_ID = UUID.fromString("c575904e-051d-4479-a480-aa6278500c32");

    @Autowired
    private PostRepository postRepository;

    @ClassRule
    public static PostgreSQLContainer postgreSQLContainer = new PostgreSQLContainer("postgres:13.1-alpine")
            .withDatabaseName("integration-tests-db")
            .withUsername("sa")
            .withPassword("sa");

    static class Initializer
            implements ApplicationContextInitializer<ConfigurableApplicationContext> {
        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
            TestPropertyValues.of(
                    "spring.datasource.url=" + postgreSQLContainer.getJdbcUrl(),
                    "spring.datasource.username=" + postgreSQLContainer.getUsername(),
                    "spring.datasource.password=" + postgreSQLContainer.getPassword()
            ).applyTo(configurableApplicationContext.getEnvironment());
        }
    }

    @Test
    @Transactional
    public void testFindAllByIdsTwoPosts(){
        // ARRANGE
        insertPosts();

        // ACT
        List<Post> posts = postRepository.findAllById(Arrays.asList(POST_1_ID, POST_2_ID));

        // ASSERT
        assertNotNull(posts);
        assertEquals(2, posts.size());
        assertNotNull(posts.get(0));
        assertEquals(POST_1_ID, posts.get(0).getId());
        assertNotNull(posts.get(1));
        assertEquals(POST_2_ID, posts.get(1).getId());
    }

    @Test
    @Transactional
    public void testFindAllByIdsOnePost(){
        // ARRANGE
        insertPosts();

        // ACT
        List<Post> posts = postRepository.findAllById(Arrays.asList(POST_1_ID));

        // ASSERT
        assertNotNull(posts);
        assertEquals(1, posts.size());
        assertNotNull(posts.get(0));
        assertEquals(POST_1_ID, posts.get(0).getId());
    }

    @Test
    @Transactional
    public void testInsertFirstPost(){
        // ARRANGE
        Post post = TestUtilities.createAnOffer();

        // ACT
        Post savedPost = postRepository.saveAndFlush(post);

        // ASSERT
        assertNotNull(savedPost);
        assertEquals(savedPost.getId(), post.getId());
        assertEquals(savedPost.getTitle(), post.getTitle());
        assertEquals(savedPost.getBody(), post.getBody());
        assertEquals(0, post.getPublishTimestamp().compareTo(savedPost.getPublishTimestamp()));
    }

    private void insertPosts() {
        postRepository.save(new Post(POST_1_ID, "title1", "body1","email1@example.com", Post.PostType.REQUEST));
        postRepository.save(new Post(POST_2_ID, "title2", "body2","email2@example.com", Post.PostType.OFFER));
        postRepository.save(new Post(POST_3_ID, "title3", "body3","email3@example.com", Post.PostType.REQUEST));
        postRepository.flush();
    }
}