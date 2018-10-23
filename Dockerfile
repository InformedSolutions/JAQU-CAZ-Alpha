FROM node:8

# The package.json file is pre-loaded into a tmp directory here such that Docker image caching
# can be leveraged. Unless package.json is changed, cached resources will be used.
COPY package.json /tmp/package.json

# If you are building your code for production
# add the --only=production flag to the below npm install command
RUN cd /tmp && npm install

# Copy node modules into application source folder
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

# Set working directory for container entry
WORKDIR /opt/app

# Copy all source into application execution directory.
# Note that any commands after this step will not be able to avail of Docker image caching
COPY . /opt/app

EXPOSE 3000

# Assume start.js is being used to launch the service.
# If your service requires a different startup command, override this in your docker-compose file.
CMD [ "npm", "start" ]
