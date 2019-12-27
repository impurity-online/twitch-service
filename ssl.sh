#!/bin/bash
openssl req -nodes -new -x509 -keyout ./ssl/server.key -out ./ssl/server.cert
