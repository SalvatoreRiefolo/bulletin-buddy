# run it like this:
# Build:
# $> docker build -t bulletin-buddy/backend -f Dockerfile .
# Run:
# $> docker run -p 8081:8081 -i -t bulletin-buddy/backend:latest

FROM maven:3-eclipse-temurin-17-alpine as maven

WORKDIR /app
COPY . /app

RUN mvn package

FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY --from=maven /app/target/bulletin-buddy-post-service-0.0.1-SNAPSHOT.jar /app/spring-boot.jar
EXPOSE 8081

ENTRYPOINT ["java","-jar","spring-boot.jar"]