
FROM openjdk:17-jdk-alpine

COPY ./target/bulletin-buddy-client-service-app-1.0-SNAPSHOT.jar /spring-boot.jar

EXPOSE 8085

ENTRYPOINT ["java","-jar","spring-boot.jar"]
