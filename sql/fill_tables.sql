-- CREATE EXTENSION pgcrypto;

INSERT INTO POST
VALUES
(
    '{bb27a1b0-9602-4d1c-9a76-6ab5dca69837}',
    'Takimata',
    'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'franz.poster@test.com',
    'REQUEST',
    current_timestamp
),
(
    '{1240ceb0-2d1b-4fb3-89e1-c30089b5222f}',
    'Ut labore',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    'jane.doe@test.com',
    'OFFER',
    current_timestamp
),
(
    '{fb32d795-1cee-4935-82a9-74b45a0d826e}',
    'kasd gubergren',
    'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'gerhard.testposter@test.com',
    'REQUEST',
    current_timestamp
),
(
    '{2019c418-711d-488f-8853-822417551f69}',
    'Vero accusam',
    'At vero eos et accusam et justo duo dolores et ea rebum.',
    'claudia.tester@test.com',
    'OFFER',
    current_timestamp
)
;

INSERT INTO COMMENT
VALUES
(
    '{d4215f86-cd95-41f5-b539-d2d408bb8055}',
    '{bb27a1b0-9602-4d1c-9a76-6ab5dca69837}',
    'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'claudia.tester@test.com',
    current_timestamp
),
(
    '{682c92c6-2a8c-4b48-9359-4d92826845c2}',
    '{bb27a1b0-9602-4d1c-9a76-6ab5dca69837}',
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
    'gerhard.testposter@test.com',
    current_timestamp
),
(
    '{0ea3fd1f-35b9-4d12-94cc-7d429e9b60d5}',
    '{bb27a1b0-9602-4d1c-9a76-6ab5dca69837}',
    'No sea takimata sanctus est Lorem ipsum dolor sit amet.',
    'jane.doe@test.com',
    current_timestamp
),
(
    '{6ca3389f-babd-4e42-b8dc-3424fb2bd5ce}',
    '{1240ceb0-2d1b-4fb3-89e1-c30089b5222f}',
    'At vero eos et accusam et justo duo dolores et ea rebum.',
    'claudia.tester@test.com',
    current_timestamp
),
 (
    '{e64d43d9-054c-43ae-89a4-8b5695207cd0}',
    '{1240ceb0-2d1b-4fb3-89e1-c30089b5222f}',
    'Dolor sit amet.',
    'gerhard.testposter@test.com',
    current_timestamp
 )
;