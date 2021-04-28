# usar linux debian version 8 (jessie)
FROM debian:jessie
# updata
RUN apt-get update
# install curl g++
RUN apt-get install -y curl make g++
# download nodejs
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs
# add package.json
ADD package.json /package.json
RUN npm install

WORKDIR /src

EXPOSE 8087

CMD ["node", "/src/index.js"]
