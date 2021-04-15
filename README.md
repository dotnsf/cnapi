# cnapi (Cloud Native API)

## Overview

**Cloud Native** intended API Sample, with IBM Cloudant.


## Pre-requisite

- IBM Cloud account

  - https://cloud.ibm.com/

- IBM Cloudant instance

  - https://www.ibm.com/jp-ja/cloud/cloudant

- IBM Cloudant credentials


## How to run with Node.js

- Install **Node.js**.

  - https://nodejs.org/ja/

- Git clone source code.

  - `$ git clone https://github.com/dotnsf/cnapi.git`

- Open terminal, and navigate to source folder.

  - `$ cd cnapi`

- Install dependent libraries.

  - `$ npm install`

- Edit settings.js with your IBM Cloudant credentials

- Run with node command.

  - `$ node app`

- Open application with your browser

  - http://localhost:8080/


## How to run with docker

- Install **Docker** cli.

  - https://www.docker.com/

- Pull image.

  - `$ docker pull dotnsf/cnapi`

- Run container with environment values.

  - `$ docker run -d --name cnapi -e db_username=XXXXX -e db_password=XXXXX -e db_url=https://xxx-xxx-xxx-bluemix.cloudantnosqldb.appdomain.cloud -p 8080:8080 dotnsf/cnapi`

- Open application with your browser

  - http://localhost:8080/


## How to navigate to Swagger API document

- Open Swagger API document with your browser

  - http://localhost:8080/_doc/


## IBM Cloudant API References

https://cloud.ibm.com/apidocs/cloudant


## Licensing

This code islicensed under MIT.


## Copyright

2021 K.Kimura @ Juge.Me all rights reserved.
