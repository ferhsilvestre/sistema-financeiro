# 1 Build Container
docker build -t frontend:latest .

# 2 Run Application
docker run --name Frontend -d -p 0.0.0.0:4206:4206 -v `pwd`/src:/app/src frontend:latest
