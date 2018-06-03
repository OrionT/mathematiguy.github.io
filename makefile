PWD = $(shell pwd)
SITE_NAME = mathematiguy.com

docker:
	docker build --tag $(SITE_NAME) . 
	docker run -it -p 8080:8080 -v $(PWD):/home/site $(SITE_NAME) /bin/ash