FROM ubuntu

RUN apt update

RUN apt list --upgradable

RUN apt install curl -y

RUN cd ~

RUN curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh

RUN bash nodesource_setup.sh

RUN apt install -y nodejs

RUN node -v

RUN npm i -g yarn

WORKDIR /home/eco-state