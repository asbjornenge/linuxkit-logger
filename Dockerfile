FROM node:14.2.0-slim
ADD . /app
WORKDIR /app
RUN npm install
COPY docker-cli-18.06.3-ce /bin/docker
COPY jq-linux64 /bin/jq
COPY start.sh /usr/bin/start
CMD ["start"]
