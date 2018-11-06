build:
	docker-compose build

run:
	docker-compose up

install:
	npm install

clean:
	-docker system prune -f

destroy:
	-docker kill $(shell docker ps -q)
	-docker rm $(shell docker ps -a -q)
	-docker rmi -f $(shell docker images -q -f dangling=true)
	-docker rmi -f $(shell docker images -q)
	-docker volume ls -qf dangling=true | xargs docker volume rm
	-docker system prune -f

kill:
	-docker kill $(shell docker ps -q)

get:
	wget https://govuk-prototype-kit.herokuapp.com/docs/download
	unzip download
	cd govuk-prototype-kit-8.2.0; npm install; npm start

