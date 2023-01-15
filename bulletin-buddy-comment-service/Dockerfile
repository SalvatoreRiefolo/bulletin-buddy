FROM maven:3-eclipse-temurin-17-alpine as maven

WORKDIR /app
COPY . /app

RUN mvn package

FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY --from=maven /app/bulletin-buddy-comment-service-app/target/comment-service.jar /app/spring-boot.jar
EXPOSE 8082

ENTRYPOINT ["java","-jar","spring-boot.jar"]