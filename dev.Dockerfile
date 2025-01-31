##### DEPENDENCIES

FROM --platform=linux/amd64 node:18
WORKDIR /app

# Install Prisma Client - remove if not using Prisma

COPY prisma ./prisma

# Install dependencies based on the preferred package manager

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml\* ./


COPY . .

EXPOSE 3001
ENV PORT 3001

CMD ["yarn", "dev"]
