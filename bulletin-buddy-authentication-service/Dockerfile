FROM openjdk:17-jdk-alpine

COPY target/bulletin-buddy-authentication-service-0.0.1-SNAPSHOT.jar /spring-boot.jar
EXPOSE 8083

ENTRYPOINT ["java","-jar","spring-boot.jar"]