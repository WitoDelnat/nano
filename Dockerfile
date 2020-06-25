FROM node:12.5.0-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive --production && yarn cache clean

COPY src src
COPY index.js .

RUN adduser -D -u 1001 -G root nonroot
USER 1001

EXPOSE 8080
CMD ["node", "index.js"]
