package com.github.bulletinbuddy;


import lombok.Builder;
import lombok.Data;
import lombok.extern.jackson.Jacksonized;

import java.util.Date;
import java.util.UUID;

@Data
@Builder
@Jacksonized
public class CommentDTO {

    private UUID commentId;
    private UUID postId;
    private String content;
    private String posterEmail;
    private Date timestamp;
}
