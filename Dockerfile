# specify the node base image with your desired version node:<version>
FROM node:8

# replace this with your application's default port
EXPOSE 3000

ENV HOST 0.0.0.0

RUN mkdir /src

COPY . /src

WORKDIR /src

RUN npm install --silent
RUN npm run build

CMD ["npm", "start"]
