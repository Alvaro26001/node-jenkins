#imagen base 
FROM node:18

#ruta de trabajo dentro de linux
WORKDIR /usr/src/app

#se copian las dependecias a la raiz del proyecto dentro de linux
COPY package*.json ./

#se instalan las dependecias
RUN npm install

#copia el directorio del proyecto al directorio principal del contenedor
COPY . .

#se expone el puerto escucha
EXPOSE 4002

#comando a ejecutar
CMD ["node", "server.js"]