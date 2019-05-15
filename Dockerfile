FROM node:8
WORKDIR /usr/src/app
COPY package.json ./

RUN npm install

COPY EmployeeDB/. .
EXPOSE 3000
CMD ["npm", "test"]