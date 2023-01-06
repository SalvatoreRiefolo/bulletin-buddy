package com.github.bulletinboard;

import com.github.bulletinboard.models.Comment;
import com.github.bulletinboard.repositories.CommentRepository;
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

import java.util.List;
import java.util.UUID;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ContextConfiguration(initializers = { CommentRepositoryIntegrationTest.Initializer.class })
public class CommentRepositoryIntegrationTest {

    private static UUID OFFER_1_ID = UUID.fromString("f26aef4a-317b-43cc-bf2d-e4afae2bd92c");
    private static UUID OFFER_2_ID = UUID.fromString("ed1f90d2-6c22-438a-b022-bdf1cb93b721");
    private static UUID COMMENT_1_ID = UUID.fromString("c575904e-051d-4479-a480-aa6278500c32");
    private static UUID COMMENT_2_ID = UUID.fromString("bcafbbba-e866-4a11-b7db-040a8d4db911");
    private static UUID COMMENT_3_ID = UUID.fromString("9dd78ec1-277d-4cc2-94eb-62d84fcd8b63");

    @Autowired
    private CommentRepository commentRepository;



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
    public void testFindByOfferId(){
        // ARRANGE
        insertComments();

        // ACT
        List<Comment> comments = commentRepository.findByOfferId(OFFER_1_ID);

        // ASSERT
        assertNotNull(comments);
        assertEquals(2, comments.size());
        assertNotNull(comments.get(0));
        assertEquals(OFFER_1_ID, comments.get(0).getPostId());
        assertNotNull(comments.get(1));
        assertEquals(OFFER_1_ID, comments.get(1).getPostId());
    }

    @Test
    @Transactional
    public void testFindById(){
        // ARRANGE
        insertComments();

        // ACT
        Comment comment = commentRepository.findByCommentId(COMMENT_1_ID);

        // ASSERT
        assertNotNull(comment);
        assertEquals(COMMENT_1_ID, comment.getCommentId());
    }

    @Test
    @Transactional
    public void testInsertFirstComment(){
        // ARRANGE
        Comment comment = new Comment(COMMENT_1_ID, OFFER_1_ID, "First comment", "email2@example.com");

        // ACT
        Comment savedComment = commentRepository.saveAndFlush(comment);

        // ASSERT
        assertNotNull(savedComment);
        assertEquals(savedComment.getCommentId(), comment.getCommentId());
        assertEquals(savedComment.getPostId(), comment.getPostId());
        assertEquals(savedComment.getContent(), comment.getContent());
        assertEquals(0, comment.getTimestamp().compareTo(savedComment.getTimestamp()));
    }


    private void insertComments() {
        commentRepository.save(new Comment(COMMENT_1_ID, OFFER_1_ID, "comment1", "email2@example.com"));
        commentRepository.save(new Comment(COMMENT_2_ID, OFFER_1_ID, "comment2", "email2@example.com"));
        commentRepository.save(new Comment(COMMENT_3_ID, OFFER_2_ID, "comment3", "email2@example.com"));
        commentRepository.flush();
    }
}