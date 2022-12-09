# run it like this:
# Build:
# $> docker build -t bulletin-buddy/backend -f Dockerfile .
# Run:
# $> docker run -p 8081:8081 -i -t bulletin-buddy/backend:latest

FROM openjdk:17-jdk-alpine

COPY ./target/bulletin-buddy-backend-service-0.0.1-SNAPSHOT.jar /spring-boot.jar

EXPOSE 8081

ENTRYPOINT ["java","-jar","spring-boot.jar"]
