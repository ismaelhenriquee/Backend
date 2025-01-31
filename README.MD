<p align="center">
  <a href="http://citi.org.br">
    <img src="https://raw.githubusercontent.com/jrmmendes/citi-doc-utils/master/citi_black.png" alt="CITi logo"/>
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/staging branch-develop-pink" alt="staging">
  <img src="https://img.shields.io/badge/production branch-main-blue" alt="production">
</p>

# monorepo-boilerplate

## Running the project

1. Be sure you have **docker/docker-compose** and **pnpm** installed.
2. You can install pnpm by running
```bash
npm install -g pnpm
```
3. Clone the repository by running 
```bash 
git clone https://github.com/ismaelhenriquee/Backend.githttps://github.com/CITi-UFPE/monorepo-boilerplate.git
```
4. Install all the dependencies by running
```bash 
pnpm install
```
5. Create a **.env** file and copy the following content to it:
```dotenv
# ###### GENERAL SETTINGS #######
PROJECT_NAME=consultorio

# ###### SERVER SETTINGS #######
NODE_ENV=development

# ###### DATABASE SETTINGS #######
DATABASE_TYPE=postgres
DATABASE_HOST={PROJECT_NAME}-db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=docker
DATABASE_DB=${PROJECT_NAME}

# ###### TEST DATABASE SETTINGS #######
DATABASE_TEST_HOST=localhost
DATABASE_TEST_PORT=5433
DATABASE_TEST_USER=postgres
DATABASE_TEST_PASSWORD=docker
DATABASE_TEST_DB=boilerplate-test

DATABASE_URL=${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_DB}
# DATABASE_URL=postgres://postgres:32acc04efc1a94b3321daa7c3562daf1@178.128.159.39:26388/app_db

GOOGLE_CLIENT_ID=97280223085-kpe22gk1vb7v6si5artrkpn5q7qbvbg6.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=secret

# ###### MAIL SETTINGS #######
EMAIL=consultorio.psi.dev@gmail.com
PASSWORD=pacr tukg qiwc ikhz

S3_ENDPOINT=nyc3.digitaloceanspaces.com
S3_BUCKET=consultorio-psi-2
S3_KEY=DO002MGKWRGVXZVEH9VQ
S3_SECRET=HfjPCB5/l0I9g8+rgDgHp+2Xb3iuOFuZ53uStsDPGM8

ASAAS_API_URL='https://sandbox.asaas.com/api/v3'
ASAAS_API_KEY='\$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNzg2OTc6OiRhYWNoXzgyNzgxMjJlLWM0YjctNGI3NS05ZDljLTE2MzAwNmFmY2MyZg=='
# PRODUCTION, FOR DOCUMENTATION PURPOSES ONLY! ASAAS_API_KEY='$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDA0NzUyOTY6OiRhYWNoX2M4NDlhNTZlLWE2NzUtNDZmYi1iNzQ2LTQ2NDM5NWVjNWM0NQ=='
ASAAS_ACCESS_TOKEN=2f939d957812b22cd3ae0acd1fe8616d3d134ebaded9a7b43321ed11a18b38b8

NEXT_PUBLIC_POSTHOG_KEY=phc_rkcnBKnKQRmRsqINq2qNPM2LCLH4MxjtbfuhftCHKhB
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

SENTRY_AUTH_TOKEN=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
```
  
6. To run the database, run:
```bash
docker-compose up
```

7. To run the migrations, run the server as described and on a new terminal, run:
```bash
pnpm migration
```

8. To run the development server, simply run:
```bash
pnpm dev
```

Your server will be running on http://localhost:3000!