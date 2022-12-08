FROM openjdk:17-jdk-alpine

COPY target/bulletin-buddy-test-backend-service-0.0.1-SNAPSHOT.jar /spring-boot.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","spring-boot.jar"]
