FROM node:14.2.0-slim
ADD . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]
