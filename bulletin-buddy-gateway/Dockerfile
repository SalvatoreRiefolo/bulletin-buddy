FROM openjdk:17-jdk-alpine

COPY target/bulletin-buddy-gateway-1.0-SNAPSHOT.jar /spring-boot.jar
EXPOSE 8084

ENTRYPOINT ["java","-jar","spring-boot.jar"]