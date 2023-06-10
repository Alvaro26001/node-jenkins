#imagen base 
FROM nginx:alpine

#se copian las dependecias a la raiz del proyecto dentro de linux
COPY ./nginx.config /etc/nginx/conf.d/default.conf

#se expone el puerto escucha
EXPOSE 80

#comando a ejecutar
CMD ["nginx", "-g","daemon off;"]