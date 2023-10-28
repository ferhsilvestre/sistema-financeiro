# 1 Build Container
docker build -t frontend:latest .

# 2 Run Application
docker run --name Frontend -d -p 0.0.0.0:4200:4200 -v `pwd`/src:/app/src frontend:latest
