FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY src/ /usr/src/app
RUN cd /usr/src/app
RUN npm install -g mocha chai && npm install
EXPOSE 3000
CMD [  "node", "server.js"  ]
