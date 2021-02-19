# Docker 
# AWS ,Azure , Heroku, Kubernete

# Whatever is required to run your node app
# NOdeJs
#all node module
#ports
#package.json


# Node 
FROM node:14.15.1

WORKDIR /user/src/app

# copy package.json
COPY package.json ./ 

# node_module
RUN npm install

# copy index
COPY index.js ./

#expose post
EXPOSE 3000

#Run the node app
CMD [ "node","index.js" ]


# docker build -t nameOfTheimage(UserManagement)

# we have Image og UserManagement
# Artifactory -> Internal space for your company
#
#Push UserManagement image to internal artifactory

# docker push url/UserManagemet

#Deploy on kubernetes ymal file