FROM openjdk:17-jdk-alpine

COPY target/bulletin-buddy-frontend-0.0.1-SNAPSHOT.jar /spring-boot.jar
EXPOSE 8080

ENTRYPOINT ["java","-jar","spring-boot.jar"]