FROM mhart/alpine-node:10
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn
COPY . .
RUN yarn build && mv ./public ./preschian-com
