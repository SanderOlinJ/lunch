FROM node:18 as builder

WORKDIR /app

COPY public public
COPY src src
COPY .eslintrc.json .
COPY next.config.mjs .
COPY package.json .
COPY package-lock.json .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY tsconfig.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]