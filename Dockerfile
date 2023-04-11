FROM node:16.3.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN npm run build

FROM node:16.3.0-alpine AS server
ENV NODE_ENV production
ENV NEW_RELIC_HOME ./build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY --chown=node:node --from=builder ./app/build ./build
USER node
CMD ["npm", "start"]
