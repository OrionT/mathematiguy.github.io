FROM node:alpine
RUN npm install -g http-server
RUN mkdir /home/site
RUN cd /home/site