FROM maven:3-eclipse-temurin-17-alpine as maven

WORKDIR /app
COPY . /app

RUN mvn package

FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY --from=maven /app/target/bulletin-buddy-authentication-service-0.0.1-SNAPSHOT.jar /app/spring-boot.jar
EXPOSE 8083

ENTRYPOINT ["java","-jar","spring-boot.jar"]