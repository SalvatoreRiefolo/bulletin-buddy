FROM maven:3.8.7-eclipse-temurin-17 as maven

WORKDIR /app
COPY . /app

RUN mvn package

FROM openjdk:17-jdk-alpine

WORKDIR /app
COPY --from=maven /app/bulletin-buddy-client-service-app/target/client-service-app.jar /app/spring-boot.jar
EXPOSE 8085

ENTRYPOINT ["java","-jar","spring-boot.jar"]