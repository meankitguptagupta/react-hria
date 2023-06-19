FROM ubuntu:20.04

ENV TZ=Asia/Kolkata
ENV homedir=/home/code

RUN apt-get update  \
    && apt-get upgrade -y   \
    && ln -fs /usr/share/zoneinfo/${TZ} /etc/localtime \
    && apt-get install curl build-essential git -y  \
    && curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh   \
    && bash /tmp/nodesource_setup.sh    \
    && apt install nodejs -y

# command to make user inside a container 
# --disabled-passwrd: no password
# --gecos "": set blank password in /etc/password
# development: username
RUN adduser --disabled-password --gecos "" --home $homedir development
USER development

WORKDIR $homedir

EXPOSE 3000

COPY . .